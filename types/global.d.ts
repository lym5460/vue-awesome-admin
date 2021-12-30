import { App } from 'vue'
import { Router, RouteRecordRaw } from 'vue-router'

declare global {
  interface InstallType {
    app: App<Element>
    routes?: RouteRecordRaw[]
    router?: Router
  }
}
