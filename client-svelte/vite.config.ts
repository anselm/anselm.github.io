import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte({
    preprocess: vitePreprocess()
  })],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  },
  define: {
    __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
    __BUILD_REVISION__: JSON.stringify(new Date().getTime().toString(36))
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['svelte', 'svelte-routing']
        }
      }
    },
    // Tell Vite to ignore dynamic imports with specific patterns
    dynamicImportVarsOptions: {
      exclude: [/\.info\.js$/]
    }
  }
})
