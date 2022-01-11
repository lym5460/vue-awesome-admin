import { defineConfig } from 'vite'
import { resolve } from './build/utils'
import createVitePlugins from './build/vite/plugins/index'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: createVitePlugins(),
  resolve: {
    alias: {
      '@': resolve('src'),
      '@assets': resolve('src/assets'),
      '@components': resolve('src/components'),
      '@utils': resolve('src/utils'),
      '@router': resolve('src/router'),
      '@store': resolve('src/store'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/index.scss";',
      },
    },
  },
})
