// Navigation utilities supporting both path and query parameter routing
import { get } from 'svelte/store'
import { config } from '../stores/config'
import { navigate as svelteNavigate } from 'svelte-routing'

export function navigateTo(path: string) {
  const routingConfig = get(config).routing
  
  console.log('navigateTo:', path, 'mode:', routingConfig.mode)
  
  if (routingConfig.mode === 'query') {
    const url = new URL(window.location.href)
    if (path === '/') {
      url.searchParams.delete('path')
    } else {
      url.searchParams.set('path', path)
    }
    
    window.history.pushState({}, '', url.toString())
    
    // Dispatch a custom event to notify the app of navigation
    window.dispatchEvent(new CustomEvent('navigate', { detail: { path } }))
    
    // Also dispatch popstate for compatibility
    window.dispatchEvent(new PopStateEvent('popstate'))
  } else {
    // Use svelte-routing for path-based navigation
    svelteNavigate(routingConfig.basePath + path)
  }
}

export function createHref(path: string): string {
  const routingConfig = get(config).routing
  
  if (routingConfig.mode === 'query') {
    if (path === '/') {
      return window.location.pathname + routingConfig.basePath
    }
    return `${routingConfig.basePath}?path=${encodeURIComponent(path)}`
  } else {
    return routingConfig.basePath + path
  }
}

export function getCurrentPath(): string {
  const routingConfig = get(config).routing
  
  if (routingConfig.mode === 'query') {
    const params = new URLSearchParams(window.location.search)
    const path = params.get('path') || '/'
    console.log('getCurrentPath (query mode):', path)
    return path
  } else {
    const pathname = window.location.pathname
    const basePath = routingConfig.basePath
    if (basePath && pathname.startsWith(basePath)) {
      return pathname.slice(basePath.length) || '/'
    }
    return pathname
  }
}
