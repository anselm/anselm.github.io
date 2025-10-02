<script lang="ts">
  import { Router, Route } from 'svelte-routing'
  import Layout from './components/Layout.svelte'
  import EntityView from './pages/EntityView.svelte'
  import Login from './pages/Login.svelte'
  import Admin from './pages/Admin.svelte'
  import { config } from './stores/config'
  import { getCurrentPath } from './utils/navigation'
  
  export let url = ""
  
  // Check routing mode from config
  $: routingMode = $config.routing?.mode || 'query'
  $: basePath = $config.routing?.basePath || ''
  
  // For query parameter routing
  let queryPath = getCurrentPath()
  
  // Listen for navigation events in query mode
  if (routingMode === 'query') {
    window.addEventListener('popstate', () => {
      queryPath = getCurrentPath()
    })
    window.addEventListener('navigate', (e: CustomEvent) => {
      queryPath = e.detail.path
    })
  }
  
  // Check if this is an invalid route (path without query parameter in query mode)
  $: isInvalidRoute = queryPath.startsWith('__INVALID__')
  $: actualPath = isInvalidRoute ? queryPath.substring('__INVALID__'.length) : queryPath
  
  // Determine which component to show based on path (for query mode)
  $: queryComponent = isInvalidRoute ? EntityView :
                      actualPath === '/login' ? Login : 
                      actualPath === '/admin' ? Admin : 
                      EntityView
  
  // Pass the path as a prop to EntityView (for query mode)
  // For invalid routes, pass a non-existent path to trigger 404
  $: queryComponentProps = queryComponent === EntityView ? { 
    path: isInvalidRoute ? actualPath : actualPath 
  } : {}
  
  // Debug logging
  $: console.log('App: routingMode =', routingMode, 'queryPath =', queryPath, 'isInvalidRoute =', isInvalidRoute, 'component =', queryComponent.name)
</script>

{#if routingMode === 'query'}
  <Layout>
    <svelte:component this={queryComponent} {...queryComponentProps} />
  </Layout>
{:else}
  <Router {url} {basePath}>
    <Layout>
      <Route path="/login" component={Login} />
      <Route path="/admin" component={Admin} />
      <Route path="/" component={EntityView} />
      <Route path="/*wildcard" component={EntityView} />
    </Layout>
  </Router>
{/if}
