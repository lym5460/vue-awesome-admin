import { createHead } from '@vueuse/head'

export const install = ({ app }: InstallType) => {
  const head = createHead()
  app.use(head)
}
