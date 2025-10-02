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
  
  // Determine which component to show based on path (for query mode)
  $: queryComponent = queryPath === '/login' ? Login : 
                      queryPath === '/admin' ? Admin : 
                      EntityView
  
  // Pass the path as a prop to EntityView (for query mode)
  $: queryComponentProps = queryComponent === EntityView ? { path: queryPath } : {}
</script>

{#if routingMode === 'query'}
  <Layout>
    <svelte:component this={queryComponent} {...queryComponentProps} />
  </Layout>
{:else}
  <Router {url} {basePath}>
    <Layout>
      <Route path="/" component={EntityView} />
      <Route path="/login" component={Login} />
      <Route path="/admin" component={Admin} />
      <Route path="/*wildcard" component={EntityView} />
    </Layout>
  </Router>
{/if}
