// WindiCSS
import { Plugin } from 'vite'
import WindiCSS from 'vite-plugin-windicss'

export function createWindicssPlugin() {
  const windiCssPlugin: Plugin[] = WindiCSS()

  return windiCssPlugin
}
