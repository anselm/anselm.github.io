import { get } from 'svelte/store'
import { apiConfig } from '../stores/appConfig'
import { 
  db, 
  cacheEntity, 
  cacheEntities, 
  getCachedEntity, 
  getCachedEntityBySlug,
  queryCachedEntities,
  isCacheStale
} from './database'
import { loadInfoFile } from './dataLoader'
import type { Entity } from '../types'

class ApiClient {
  private loadedInfoFiles = new Set<string>()
  private serverAvailable: boolean | null = null
  private initPromise: Promise<void> | null = null
  private stubEntityIds = new Set<string>()
  
  constructor() {
    // Don't call init in constructor - let it be called explicitly
  }
  
  async init() {
    // Ensure init only runs once
    if (this.initPromise) {
      console.log('ApiClient: Init already in progress or complete, waiting...')
      return this.initPromise
    }
    
    this.initPromise = this._init()
    return this.initPromise
  }
  
  private async _init() {
    const config = get(apiConfig)
    
    console.log('ApiClient: Initializing...')
    console.log('ApiClient: Config:', config)
    
    // Flush cache if configured
    if (config.flushCacheOnStartup) {
      console.log('ApiClient: Flushing cache on startup...')
      try {
        await db.delete()
        await db.open()
        console.log('ApiClient: Cache flushed successfully')
      } catch (error) {
        console.error('ApiClient: Failed to flush cache:', error)
      }
    }
    
    // Load root .info.js file if configured
    if (config.loadStaticData) {
      console.log('ApiClient: Loading root .info.js...')
      try {
        await this.loadInfoFileForPath('/')
        console.log('ApiClient: Root .info.js loaded successfully')
      } catch (error) {
        console.error('ApiClient: Failed to load root .info.js:', error)
      }
    }
    
    console.log('ApiClient: Initialization complete')
  }
  
  private async checkServerAvailability(): Promise<boolean> {
    const config = get(apiConfig)
    
    // If we already know the server status, return it
    if (this.serverAvailable !== null) {
      return this.serverAvailable
    }
    
    try {
      const response = await fetch(`${config.baseUrl}/health`, {
        method: 'GET',
        signal: AbortSignal.timeout(5000)
      })
      
      this.serverAvailable = response.ok
      console.log('ApiClient: Server availability check:', this.serverAvailable)
      return this.serverAvailable
    } catch (error) {
      this.serverAvailable = false
      console.log('ApiClient: Server is unavailable')
      return false
    }
  }
  
  private async fetchFromServer(path: string, options: RequestInit = {}): Promise<any> {
    const config = get(apiConfig)
    const fullUrl = `${config.baseUrl}${path}`
    
    try {
      const response = await fetch(fullUrl, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      })
      
      if (!response.ok) {
        let errorMessage = `HTTP ${response.status}`
        try {
          const errorData = await response.json()
          errorMessage = errorData.error || errorMessage
        } catch (e) {
          errorMessage = response.statusText || errorMessage
        }
        const err = new Error(errorMessage)
        ;(err as any).status = response.status
        throw err
      }
      
      const data = await response.json()
      
      if (data === null || data === undefined) {
        const err = new Error('Entity not found')
        ;(err as any).status = 404
        throw err
      }
      
      return data
    } catch (error: any) {
      console.log('ApiClient: Server request failed:', error.message)
      throw error
    }
  }
  
  async request(path: string, options: RequestInit = {}) {
    // Ensure initialization is complete
    await this.init()
    
    const config = get(apiConfig)
    const method = options.method || 'GET'
    
    console.log(`ApiClient: Request ${method} ${path}`)
    
    // For GET requests, use read-through cache pattern
    if (method === 'GET') {
      return this.getWithCache(path)
    }
    
    // For mutations, try server first (if available), then fail
    if (config.serverless) {
      throw new Error('Mutations not supported in serverless mode')
    }
    
    const serverAvailable = await this.checkServerAvailability()
    if (!serverAvailable) {
      throw new Error('Server unavailable - mutations not supported in offline mode')
    }
    
    try {
      const data = await this.fetchFromServer(path, options)
      
      // Cache the response if it's an entity or array of entities
      if (data && typeof data === 'object') {
        if (Array.isArray(data)) {
          await cacheEntities(data)
        } else if (data.id) {
          await cacheEntity(data)
        }
      }
      
      return data
    } catch (error) {
      console.error('ApiClient: Mutation failed:', error)
      throw error
    }
  }
  
  private async getWithCache(path: string): Promise<any> {
    const config = get(apiConfig)
    
    // Step 1: Check cache first
    const cached = await this.getFromCache(path)
    
    // Step 2: If found in cache and not stale, return it
    if (cached !== null) {
      const isStale = Array.isArray(cached) 
        ? false // Arrays don't have _cachedAt
        : await isCacheStale(cached, config.cacheDuration)
      
      if (!isStale) {
        console.log(`ApiClient: Cache hit (fresh) for ${path}`)
        return cached
      }
      
      console.log(`ApiClient: Cache hit (stale) for ${path}`)
    } else {
      console.log(`ApiClient: Cache miss for ${path}`)
    }
    
    // Step 3: Try to load .info.js file for the requested path
    const slug = this.extractSlugFromPath(path)
    if (slug) {
      console.log(`ApiClient: Attempting to load .info.js for slug: ${slug}`)
      const loaded = await this.loadInfoFileForPath(slug)
      
      if (loaded) {
        // Try cache again after loading
        const cachedAfterLoad = await this.getFromCache(path)
        if (cachedAfterLoad !== null) {
          console.log(`ApiClient: Found in cache after loading .info.js`)
          return cachedAfterLoad
        }
      }
    }
    
    // Step 4: Try to fetch from server if not in serverless mode
    if (!config.serverless) {
      const serverAvailable = await this.checkServerAvailability()
      
      if (serverAvailable) {
        try {
          console.log(`ApiClient: Fetching from server: ${path}`)
          const data = await this.fetchFromServer(path)
          
          // Cache the fresh data
          if (data && typeof data === 'object') {
            if (Array.isArray(data)) {
              await cacheEntities(data)
            } else if (data.id) {
              await cacheEntity(data)
            }
          }
          
          console.log(`ApiClient: Server fetch successful, cached result`)
          return data
        } catch (error: any) {
          console.log(`ApiClient: Server fetch failed: ${error.message}`)
          // Fall through to return cached data (even if stale) or throw
        }
      }
    }
    
    // Step 5: If we have cached data (even if stale), return it
    if (cached !== null) {
      console.log(`ApiClient: Returning stale cached data for ${path}`)
      return cached
    }
    
    // Step 6: No cached data and server unavailable - throw 404
    const err = new Error(`Entity not found: ${path}`)
    ;(err as any).status = 404
    throw err
  }
  
  private async getFromCache(path: string): Promise<any> {
    // Parse the path to determine what to fetch from cache
    
    // Root entity by slug
    if (path === '/entities/slug') {
      return await getCachedEntityBySlug('/')
    }
    
    // Entity by slug
    if (path.startsWith('/entities/slug/')) {
      const slug = '/' + path.substring('/entities/slug/'.length)
      return await getCachedEntityBySlug(slug)
    }
    
    // Entity by ID
    if (path.match(/^\/entities\/[^\/\?]+$/)) {
      const id = path.substring('/entities/'.length)
      return await getCachedEntity(id)
    }
    
    // Query entities
    if (path.startsWith('/entities?')) {
      const params = new URLSearchParams(path.split('?')[1])
      const filters: any = {}
      
      if (params.get('type')) filters.type = params.get('type')
      if (params.get('parentId')) filters.parentId = params.get('parentId')
      filters.limit = parseInt(params.get('limit') || '20')
      filters.offset = parseInt(params.get('offset') || '0')
      
      console.log('ApiClient: Querying cache with filters:', filters)
      return await queryCachedEntities(filters)
    }
    
    return null
  }
  
  private extractSlugFromPath(path: string): string | null {
    // Extract slug from various path formats
    if (path === '/entities/slug') {
      return '/'
    }
    
    if (path.startsWith('/entities/slug/')) {
      return '/' + path.substring('/entities/slug/'.length)
    }
    
    // For entity by ID paths, we can't determine the slug
    return null
  }
  
  private async loadInfoFileForPath(slug: string): Promise<boolean> {
    // Normalize the slug to a path
    const normalizedPath = slug === '/' ? '/' : slug.endsWith('/') ? slug.slice(0, -1) : slug
    const infoFilePath = normalizedPath === '/' ? '/.info.js' : `${normalizedPath}/.info.js`
    
    // Check if we've already loaded this file
    if (this.loadedInfoFiles.has(infoFilePath)) {
      console.log(`ApiClient: Already loaded ${infoFilePath}`)
      return false
    }
    
    try {
      console.log(`ApiClient: Loading ${infoFilePath}...`)
      
      // Mark as loaded before attempting (to prevent retry on failure)
      this.loadedInfoFiles.add(infoFilePath)
      
      // Load the file
      const entities = await loadInfoFile(infoFilePath)
      
      if (entities.length > 0) {
        console.log(`ApiClient: Loaded ${entities.length} entities from ${infoFilePath}`)
        
        // Create stubs for any missing parents
        const entitiesWithStubs = await this.ensureParentStubs(entities)
        
        // Cache all entities
        await cacheEntities(entitiesWithStubs)
        
        return true
      } else {
        console.log(`ApiClient: No entities found in ${infoFilePath}`)
        return false
      }
    } catch (error) {
      console.log(`ApiClient: Failed to load ${infoFilePath}:`, error)
      return false
    }
  }
  
  private async ensureParentStubs(entities: Entity[]): Promise<Entity[]> {
    const result: Entity[] = [...entities]
    const existingIds = new Set(entities.map(e => e.id))
    
    for (const entity of entities) {
      if (entity.parentId && !existingIds.has(entity.parentId)) {
        // Check if parent exists in cache
        const parentInCache = await getCachedEntity(entity.parentId)
        
        if (!parentInCache && !this.stubEntityIds.has(entity.parentId)) {
          console.log(`ApiClient: Creating stub for parent: ${entity.parentId}`)
          
          const stub: Entity = {
            id: entity.parentId,
            type: 'group',
            title: `[Loading: ${entity.parentId}]`,
            content: 'This entity is being loaded...',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            metadata: { isStub: true }
          }
          
          this.stubEntityIds.add(entity.parentId)
          result.push(stub)
          existingIds.add(entity.parentId)
        }
      }
    }
    
    return result
  }
}

export const apiClient = new ApiClient()
