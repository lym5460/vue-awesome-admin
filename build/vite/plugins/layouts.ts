import { Plugin } from 'vite'
import Layouts from 'vite-plugin-vue-layouts'

export function createLayoutsPlugin() {
  const layoutsPlugin: Plugin = Layouts()
  return layoutsPlugin
}
