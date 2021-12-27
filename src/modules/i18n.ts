import { createI18n } from 'vue-i18n'
// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import

const messages = Object.fromEntries(
  Object.entries(import.meta.globEager('../../locales/*.y(a)?ml')).map(([key, value]) => {
    const yaml = key.endsWith('.yaml')
    return [key.slice(14, yaml ? -5 : -4), value.default]
  }),
)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function install({ app }: any) {
  const i18n = createI18n({
    legacy: false,
    locale: 'zh-CN',
    messages,
  })
  app.use(i18n)
}
