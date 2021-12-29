import { Plugin } from 'vite'
import Icons from 'unplugin-icons/vite'

export function createIconifyPlugin() {
  //https://github.com/antfu/unplugin-icons
  const iconifyPlugin: Plugin = Icons({
    autoInstall: true,
  })
  return iconifyPlugin
}
