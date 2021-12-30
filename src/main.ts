import { createApp } from 'vue'
import App from './App.vue'
import { router, routes } from './router'
// WindiCSS
import 'virtual:windi.css'

const app = createApp(App)

app.use(router)
// install all modules under './modules'
Object.values(import.meta.globEager('./modules/*.ts')).map((i) => {
  i.install?.({ app, router, routes })
})

app.mount('#app')
