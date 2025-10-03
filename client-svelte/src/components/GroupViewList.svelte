<script lang="ts">
  import type { Entity } from '../types'
  import { renderMarkdown } from '../utils/markdown'
  import RouterLink from './RouterLink.svelte'

  export let children: Entity[] = []
  
  function stripHtml(html: string): string {
    const tmp = document.createElement('div')
    tmp.innerHTML = html
    return tmp.textContent || tmp.innerText || ''
  }
  
  function getPreview(content: string): string {
    const rendered = renderMarkdown(content)
    const text = stripHtml(rendered)
    return text.substring(0, 100) + (text.length > 100 ? '...' : '')
  }

  function fixDate(raw) {
    const date = new Date(raw);
    const str = date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit'
    });
    const [a,b] = str.split(',')
    return b + ' ' + a
  }

</script>

<div class="space-y-2">
  {#each children as child}
    <RouterLink to={child.slug || `/${child.id}`} className="block border-b border-white/10 pb-2 hover:border-white/30 transition-colors">
      <div class="flex items-baseline gap-3">
        <div class="flex-grow">
          <h3 class="text-sm font-medium inline">{child.title || child.slug || 'Untitled'}</h3>
          {#if child.content}
            <span class="text-xs text-white/60 ml-2">{getPreview(child.content)}</span>
          {/if}
        </div>
        <span class="text-xs text-white/40">{fixDate(child.updatedAt)}</span>
      </div>
    </RouterLink>
  {/each}
</div>
