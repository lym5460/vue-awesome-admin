import { createApp } from 'vue'
import App from './App.vue'

// WindiCSS
import 'virtual:windi.css'

const app = createApp(App)

// install all modules under './modules'
Object.values(import.meta.globEager('./modules/*.ts')).map((i) => {
  i.install?.({ app })
})

app.mount('#app')
