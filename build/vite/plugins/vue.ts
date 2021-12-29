import { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'

export function createVuePlugin() {
  const vuePlugin: Plugin = vue()
  return vuePlugin
}
