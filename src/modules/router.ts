import { createRouter, createWebHistory } from 'vue-router'
// import routes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

const routes = setupLayouts(generatedRoutes)

export function install({ app }: any) {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  app.use(router)
}
