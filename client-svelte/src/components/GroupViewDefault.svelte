<script lang="ts">
  import { createEventDispatcher } from 'svelte'
  import type { Entity } from '../types'
  import RouterLink from './RouterLink.svelte'
  import PostItem from './PostItem.svelte'
  import EntityHeader from './EntityHeader.svelte'

  export let entity: Entity
  export let children: Entity[] = []
  
  const dispatch = createEventDispatcher()
  
  function handleCreatePost(event: CustomEvent) {
    dispatch('createPost', event.detail)
  }
</script>

<EntityHeader {entity} on:createPost={handleCreatePost} />

{#if children.length > 0}
  <div class="space-y-4">
    {#each children as child}
      {#if child.type === 'post'}
        <PostItem post={child} />
      {:else}
        <div class="border-b border-white/10 pb-4">
          <RouterLink to={child.slug || `/${child.id}`} className="hover:underline">
            <div class="flex items-baseline gap-2">
              <span class="text-xs text-white/60">[{child.type}]</span>
              <span class="text-sm font-medium">{child.title || child.slug || 'Unt itled'}</span>
            </div>
          </RouterLink>
          {#if child.content}
            <p class="text-xs text-white/60 mt-1 line-clamp-2">{child.content}</p>
          {/if}
        </div>
      {/if}
    {/each}
  </div>
{:else if entity.type === 'group'}
  <div class="text-xs text-white/60">No content in this group yet</div>
{/if}
