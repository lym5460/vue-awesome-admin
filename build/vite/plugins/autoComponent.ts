import Components from 'unplugin-vue-components/vite'
import { resolve } from '../../utils'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { Plugin } from 'vite'

export function createAutoComponentPlugin() {
  // https://github.com/antfu/unplugin-vue-components
  const autoComponentPlugin: Plugin = Components({
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    resolvers: [
      // usage: {prefix}-{collection}-{icon}
      IconsResolver({
        prefix: 'i', // default:i
      }),
      ElementPlusResolver(),
    ],
    dts: resolve('types/components.d.ts'),
  })

  return autoComponentPlugin
}
