// Navigation utilities for query parameter-based routing

export function navigateTo(path: string) {
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
}

export function createHref(path: string): string {
  if (path === '/') {
    return window.location.pathname
  }
  return `?path=${encodeURIComponent(path)}`
}
