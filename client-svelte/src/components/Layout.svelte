<script lang="ts">
  import { auth } from '../stores/auth'
  import { config, headerConfig } from '../stores/config'
  import { navigateTo, createHref } from '../utils/navigation'

  function handleLogout() {
    auth.logout()
    navigateTo('/')
  }
  
  $: customHeader = $config.methods?.renderHeader?.($config)
</script>

<div class="min-h-screen flex flex-col">
  {#if $headerConfig.enabled}
    {#if customHeader}
      <!-- Custom header HTML -->
      <header class={$headerConfig.className}>
        <div class="max-w-6xl mx-auto px-4 py-2">
          {@html customHeader}
        </div>
      </header>
    {:else}
      <!-- Default configurable header -->
      <header class="border-b border-white/20 px-4 py-2">
        <div class="max-w-6xl mx-auto flex items-center justify-between">
          <a href={createHref('/')} class="text-xs uppercase tracking-wider hover:underline">
            {$config.appTitle}
          </a>
          <nav class="flex items-center gap-4 text-xs">
            {#if $config.features.authentication && $auth}
              <a href={createHref('/admin')} class="hover:underline">
                admin
              </a>
              <span class="text-white/60">[{$auth.slug}]</span>
              <button on:click={handleLogout} class="hover:underline">
                logout
              </button>
            {:else if $config.features.authentication}
              <a href={createHref('/login')} class="hover:underline">
                login
              </a>
            {/if}
          </nav>
        </div>
      </header>
    {/if}
  {/if}
  
  <main class="flex-1 px-4 py-8">
    <div class="max-w-6xl mx-auto">
      <slot />
    </div>
  </main>
</div>
