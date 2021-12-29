import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { Plugin } from 'vite'
import { resolve } from '../../utils'

export function createAutoImport() {
  // https://github.com/antfu/unplugin-auto-import
  const autoImportPlugin: Plugin = AutoImport({
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
    dts: resolve('types/auto-imports.d.ts'),
  })

  return autoImportPlugin
}
