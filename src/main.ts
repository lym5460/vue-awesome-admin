import { createApp } from 'vue'
import App from './App.vue'

// WindiCSS
import 'virtual:windi.css'
// 路由
import router from '@/router/index'

const app = createApp(App)

app.use(router)

// install all modules under './modules'
Object.values(import.meta.globEager('./modules/*.ts')).map((i) => {
  i.install?.({ app })
})

app.mount('#app')
