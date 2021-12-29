import type { Plugin } from 'vite'
import { createWindicssPlugin } from './windicss'
import { createAutoComponentPlugin } from './autoComponent'
import { createAutoImport } from './autoImport'
import { createIconifyPlugin } from './iconify'
import { createI18nPlugin } from './i18n'
import { createVuePlugin } from './vue'
import { createPagesPlugin } from './pages'
import { createLayoutsPlugin } from './layouts'

export default function createVitePlugins() {
  const vitePlugins: (Plugin | Plugin[])[] = []

  //vue support
  vitePlugins.push(createVuePlugin())

  // windicss
  vitePlugins.push(createWindicssPlugin())

  // autoComponent
  vitePlugins.push(createAutoComponentPlugin())

  // autoImport
  vitePlugins.push(createAutoImport())

  //iconify
  vitePlugins.push(createIconifyPlugin())

  //i18n
  vitePlugins.push(createI18nPlugin())

  //pages:file basing routing
  vitePlugins.push(createPagesPlugin())

  // layouts
  vitePlugins.push(createLayoutsPlugin())

  return vitePlugins
}
