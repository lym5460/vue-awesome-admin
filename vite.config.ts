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
// element-plus
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
// i18n
import vueI18n from '@intlify/vite-plugin-vue-i18n'

function _resolve(dir: string) {
  return path.resolve(__dirname, dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://windicss.org/integrations/vite.html
    WindiCSS(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/head',
        '@vueuse/core',
        {
          '@vueuse/router': [
            'useRouteHash', // import { useRouteHash } from '@vueuse/router',
            'useRouteQuery', // import { useRouteQuery } from '@vueuse/router',
          ],
        },
      ],
      dts: _resolve('types/auto-imports.d.ts'),
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        // usage: {prefix}-{collection}-{icon}
        IconsResolver({
          prefix: 'i', // default:i
        }),
        ElementPlusResolver(),
      ],
      dts: _resolve('types/components.d.ts'),
    }),
    //https://github.com/antfu/unplugin-icons
    Icons({
      autoInstall: true,
    }),
    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    vueI18n({
      // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
      // compositionOnly: false,
      // you need to set i18n resource including paths !
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),
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
