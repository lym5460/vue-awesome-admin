import { defineStore } from 'pinia'
import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils.js'
import { darkTheme as naiveUIDarkTheme, GlobalThemeOverrides } from 'naive-ui'
import { themeConfig } from '@/theme/config'
import { ComputedRef } from 'vue'
import Color from 'color'

export const useThemeStore = defineStore('theme', () => {
  // 全局的主题名称 eg: light,dark,purple...
  const themeScope = ref(localStorage.getItem('theme') || 'light')
  // naiveUI组件库的主题变量覆盖
  const themeOverrides: ComputedRef<GlobalThemeOverrides> = computed(() => {
    const theme = themeConfig[themeScope.value]
    if (themeScope.value === 'dark' || themeScope.value === 'light') {
      const themeOverrides = localStorage.getItem('themeOverrides')
      return themeOverrides ? JSON.parse(themeOverrides) : {}
    } else {
      const themeHover = Color(theme).lighten(0.3)
      const themePressed = Color(theme).darken(0.1)
      return {
        common: {
          primaryColor: theme,
          primaryColorHover: themeHover,
          primaryColorPressed: themePressed,
        },
        LoadingBar: {
          colorLoading: theme,
        },
      }
    }
  })
  // 深色主题
  const darkTheme = ref()

  /**
   * 切换主题
   * @param theme string '@/theme 文件夹文件名称'
   */
  const switchTheme = (theme: string) => {
    themeScope.value = theme
  }

  watchEffect(() => {
    // 切换非组件库主题色
    toggleTheme({ scopeName: themeScope.value })

    // 切换naiveUI深色模式
    if (themeScope.value === 'dark') {
      darkTheme.value = naiveUIDarkTheme
    }

    // 切换naiveUI浅色模式
    if (themeScope.value === 'light') {
      darkTheme.value = null
    }

    localStorage.setItem('theme', themeScope.value)
    localStorage.setItem('themeOverrides', JSON.stringify(themeOverrides.value))
  })

  return { switchTheme, themeOverrides, darkTheme }
})
