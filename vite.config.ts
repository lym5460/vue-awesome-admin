import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// WindiCSS
import WindiCSS from 'vite-plugin-windicss'
// Iconify
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
// vite插件-vue组件按需自动导入
import Components from 'unplugin-vue-components/vite'

function _resolve(dir: string) {
  return path.resolve(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://windicss.org/integrations/vite.html
    WindiCSS(),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      resolvers: [
        // usage: {prefix}-{collection}-{icon}
        IconsResolver({
          prefix: 'i', // default:i
        }),
      ],
    }),
    //https://github.com/antfu/unplugin-icons
    Icons(),
  ],
  resolve: {
    alias: {
      '@': _resolve('src'),
      '@assets': _resolve('src/assets'),
      '@components': _resolve('src/components'),
      '@utils': _resolve('src/utils'),
      '@router': _resolve('src/router'),
      '@store': _resolve('src/store'),
    },
  },
})
