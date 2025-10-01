<script lang="ts">
  import Layout from './components/Layout.svelte'
  import EntityView from './pages/EntityView.svelte'
  import Login from './pages/Login.svelte'
  import Admin from './pages/Admin.svelte'
  
  // Parse query parameters to determine current view
  function getQueryParam(name: string): string | null {
    const params = new URLSearchParams(window.location.search)
    return params.get(name)
  }
  
  // Reactive path from query parameter
  $: path = getQueryParam('path') || '/'
  
  // Determine which component to show based on path
  $: component = path === '/login' ? Login : 
                 path === '/admin' ? Admin : 
                 EntityView
  
  // Pass the path as a prop to EntityView
  $: componentProps = component === EntityView ? { path } : {}
  
  // Listen for popstate events (browser back/forward)
  window.addEventListener('popstate', () => {
    path = getQueryParam('path') || '/'
  })
</script>

<Layout>
  <svelte:component this={component} {...componentProps} />
</Layout>
