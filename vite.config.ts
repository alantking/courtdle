import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/courtdle/',  // <-- Add this for GitHub Pages repo deployment
  plugins: [
    vue({
      // Enable Vue 3 Reactivity Transform to use $ref, $computed, $fromRefs
      reactivityTransform: true
    })
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        // Optional: tweak if you need to change chunk naming
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  }
})
