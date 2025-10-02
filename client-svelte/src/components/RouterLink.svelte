<script lang="ts">
  import { Link } from 'svelte-routing'
  import { navigateTo, createHref } from '../utils/navigation'
  import { config } from '../stores/config'
  
  export let to: string
  export let className: string = ''
  
  $: routingMode = $config.routing.mode
  
  function handleClick(e: MouseEvent) {
    if (routingMode === 'query') {
      e.preventDefault()
      navigateTo(to)
    }
  }
</script>

{#if routingMode === 'path'}
  <Link {to} class={className}>
    <slot />
  </Link>
{:else}
  <a href={createHref(to)} class={className} on:click={handleClick}>
    <slot />
  </a>
{/if}
