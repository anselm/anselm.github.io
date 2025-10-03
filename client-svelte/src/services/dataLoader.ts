import type { Entity } from '../types'

export async function loadInfoFile(filePath: string): Promise<Entity[]> {
  const entities: Entity[] = []
  
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
        entities.push(...module.default)
      } else if (module.default.id) {
        console.log('DataLoader: Default export is single entity')
        entities.push(module.default)
      }
    }
    
    // Process named exports
    for (const [key, value] of Object.entries(module)) {
      if (key === 'default') continue
      
      console.log(`DataLoader: Processing named export "${key}":`, value)
      
      if (Array.isArray(value)) {
        console.log(`DataLoader: Named export "${key}" is array with ${value.length} items`)
        entities.push(...value)
      } else if (value && typeof value === 'object' && (value as any).id) {
        console.log(`DataLoader: Named export "${key}" is single entity`)
        entities.push(value as Entity)
      }
    }
    
    console.log(`DataLoader: Found ${entities.length} entities in ${filePath}`)
    return entities
  } catch (error) {
    console.error(`DataLoader: Failed to load ${filePath}:`, error)
    return []
  }
}

