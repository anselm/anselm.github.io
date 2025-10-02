<script lang="ts">
  import { Link } from 'svelte-routing'
  import { createHref } from '../utils/navigation'
  import { config } from '../stores/config'
  
  export let to: string
  export let className: string = ''
  
  $: routingMode = $config.routing.mode
</script>

{#if routingMode === 'path'}
  <Link {to} class={className}>
    <slot />
  </Link>
{:else}
  <a href={createHref(to)} class={className}>
    <slot />
  </a>
{/if}
