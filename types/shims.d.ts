declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@setCustomTheme' {
  import setCustomTheme from '@setCustomTheme'
  export default setCustomTheme
}

declare module '@zougt/*' {
  import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils.js'
  export { toggleTheme }
}

declare module '*.md' {
  import { ComponentOptions } from 'vue'
  const Component: ComponentOptions
  export default Component
}
