import { Plugin } from 'vite'
import { vueI18n } from '@intlify/vite-plugin-vue-i18n'
import { resolve } from '../../utils'

export function createI18nPlugin() {
  // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
  const i18nPlugin: Plugin = vueI18n({
    runtimeOnly: true,
    compositionOnly: true,
    include: [resolve('locales/**')],
  })

  return i18nPlugin
}
