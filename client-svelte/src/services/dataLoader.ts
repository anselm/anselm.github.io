import { cacheEntities } from './database'
import { get } from 'svelte/store'
import { apiConfig } from '../stores/config'
import type { Entity } from '../types'

export async function loadStaticData(): Promise<void> {
  const config = get(apiConfig)
  const staticFiles = config.staticDataFiles || ['/static.info.js']
  const allEntities: Entity[] = []
  
  console.log(`DataLoader: Loading static data from ${staticFiles.length} files`)
  
  // Load all files using native ES6 modules
  for (const filePath of staticFiles) {
    try {
      console.log(`DataLoader: Loading ${filePath}...`)
      
      // Use native dynamic import with a timestamp to bypass any caching
      const timestamp = Date.now()
      const module = await import(/* @vite-ignore */ `${filePath}?t=${timestamp}`)
      
      console.log('DataLoader: Module loaded:', module)
      console.log('DataLoader: Module keys:', Object.keys(module))
      
      // Process default export
      if (module.default) {
        console.log('DataLoader: Processing default export:', module.default)
        if (Array.isArray(module.default)) {
          console.log(`DataLoader: Default export is array with ${module.default.length} items`)
          allEntities.push(...module.default)
        } else if (module.default.id) {
          console.log('DataLoader: Default export is single entity')
          allEntities.push(module.default)
        }
      }
      
      // Process named exports
      for (const [key, value] of Object.entries(module)) {
        if (key === 'default') continue
        
        console.log(`DataLoader: Processing named export "${key}":`, value)
        
        if (Array.isArray(value)) {
          console.log(`DataLoader: Named export "${key}" is array with ${value.length} items`)
          allEntities.push(...value)
        } else if (value && typeof value === 'object' && (value as any).id) {
          console.log(`DataLoader: Named export "${key}" is single entity`)
          allEntities.push(value as Entity)
        }
      }
      
      console.log(`DataLoader: Found ${allEntities.length} entities so far`)
    } catch (error) {
      console.error(`DataLoader: Failed to load ${filePath}:`, error)
      // Continue loading other files even if one fails
    }
  }
  
  if (allEntities.length > 0) {
    console.log(`DataLoader: Total entities loaded: ${allEntities.length}`)
    console.log('DataLoader: Entities:', allEntities)
    
    // Sort entities to ensure parents come before children
    // This is important for proper caching and relationship building
    const sortedEntities = sortEntitiesByDependency(allEntities)
    console.log('DataLoader: Sorted entities by dependency')
    
    await cacheEntities(sortedEntities)
    console.log('DataLoader: All entities cached successfully')
  } else {
    console.log('DataLoader: No entities found in any static data files')
  }
}

/**
 * Sort entities so that parents come before their children.
 * This ensures that when we cache entities, parent entities exist before children reference them.
 */
function sortEntitiesByDependency(entities: Entity[]): Entity[] {
  const entityMap = new Map<string, Entity>()
  const sorted: Entity[] = []
  const visited = new Set<string>()
  const visiting = new Set<string>()
  
  // Build a map of entities by ID
  entities.forEach(entity => {
    entityMap.set(entity.id, entity)
  })
  
  // Depth-first traversal to sort by dependency
  function visit(entityId: string) {
    if (visited.has(entityId)) return
    
    // Detect circular dependencies
    if (visiting.has(entityId)) {
      console.warn(`DataLoader: Circular dependency detected for entity ${entityId}`)
      return
    }
    
    const entity = entityMap.get(entityId)
    if (!entity) return
    
    visiting.add(entityId)
    
    // Visit parent first if it exists in our set
    if (entity.parentId && entityMap.has(entity.parentId)) {
      visit(entity.parentId)
    }
    
    visiting.delete(entityId)
    visited.add(entityId)
    sorted.push(entity)
  }
  
  // Visit all entities
  entities.forEach(entity => {
    visit(entity.id)
  })
  
  console.log('DataLoader: Entity order after sorting:', sorted.map(e => ({ id: e.id, parentId: e.parentId })))
  
  return sorted
}
