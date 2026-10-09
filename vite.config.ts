import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

const base = process.env.BASE_PATH || '/'
const isPreview = process.env.IS_PREVIEW === 'true'

export default defineConfig({
  define: {
    __BASE_PATH__: JSON.stringify(base),
    __IS_PREVIEW__: JSON.stringify(isPreview),
  },

  plugins: [react()],

  base,

  build: {
    sourcemap: true,
    outDir: 'out',
  },

  resolve: {
    alias: {
      '@': resolve(process.cwd(), 'src'),
    },
  },

  server: {
    port: 3000,
    host: '0.0.0.0',
  },
})
