import { createPinia } from 'pinia'

export const install = ({ app }: InstallType) => {
  const pinia = createPinia()
  app.use(pinia)
}
