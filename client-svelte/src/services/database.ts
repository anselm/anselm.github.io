import Dexie, { type Table } from 'dexie'
import type { Entity } from '../types'

export interface CachedEntity extends Entity {
  _cachedAt?: number
}

class SocialApplianceDB extends Dexie {
  entities!: Table<CachedEntity, string>
  
  constructor() {
    super('SocialApplianceDB')
    
    this.version(1).stores({
      entities: 'id, slug, type, parentId, [type+parentId], _cachedAt'
    })
  }
}

export const db = new SocialApplianceDB()

// Helper functions for entity caching
export async function cacheEntity(entity: Entity): Promise<void> {
  console.log('Database: Caching entity:', entity.id, entity.slug)
  await db.entities.put({
    ...entity,
    _cachedAt: Date.now()
  })
}

export async function cacheEntities(entities: Entity[]): Promise<void> {
  console.log(`Database: Caching ${entities.length} entities`)
  const cachedEntities = entities.map(e => ({
    ...e,
    _cachedAt: Date.now()
  }))
  await db.entities.bulkPut(cachedEntities)
  console.log('Database: Entities cached successfully')
  
  // Verify what was cached
  const count = await db.entities.count()
  console.log(`Database: Total entities in database: ${count}`)
}

export async function getCachedEntity(id: string): Promise<CachedEntity | undefined> {
  console.log('Database: Getting entity by id:', id)
  const entity = await db.entities.get(id)
  console.log('Database: Found entity:', entity ? 'yes' : 'no')
  return entity
}

export async function getCachedEntityBySlug(slug: string): Promise<CachedEntity | undefined> {
  console.log('Database: Getting entity by slug:', slug)
  const entity = await db.entities.where('slug').equals(slug).first()
  console.log('Database: Found entity:', entity ? entity.id : 'no')
  if (!entity) {
    // Debug: show all slugs in database
    const allEntities = await db.entities.toArray()
    console.log('Database: All slugs in database:', allEntities.map(e => e.slug))
  }
  return entity
}

export async function queryCachedEntities(filters: {
  type?: string
  parentId?: string
  limit?: number
  offset?: number
}): Promise<CachedEntity[]> {
  console.log('Database: Querying entities with filters:', filters)
  let query = db.entities.toCollection()
  
  if (filters.type && filters.parentId !== undefined) {
    query = db.entities.where('[type+parentId]').equals([filters.type, filters.parentId])
  } else if (filters.type) {
    query = db.entities.where('type').equals(filters.type)
  } else if (filters.parentId !== undefined) {
    query = db.entities.where('parentId').equals(filters.parentId)
  }
  
  if (filters.offset) {
    query = query.offset(filters.offset)
  }
  
  if (filters.limit) {
    query = query.limit(filters.limit)
  }
  
  const results = await query.toArray()
  console.log(`Database: Query returned ${results.length} entities`)
  return results
}

export async function clearCache(): Promise<void> {
  console.log('Database: Clearing cache')
  await db.entities.clear()
}

export async function deleteDatabase(): Promise<void> {
  console.log('Database: Deleting database')
  await db.delete()
}

export async function isCacheStale(entity: CachedEntity, maxAge: number): boolean {
  if (!entity._cachedAt) return true
  return Date.now() - entity._cachedAt > maxAge
}
