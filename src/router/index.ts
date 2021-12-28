import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/Home.vue'),
  },
]

export default createRouter({
  history: createWebHistory(),
  routes: routes,
})
