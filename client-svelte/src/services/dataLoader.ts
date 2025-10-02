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
    await cacheEntities(allEntities)
    console.log('DataLoader: All entities cached successfully')
  } else {
    console.log('DataLoader: No entities found in any static data files')
  }
}
