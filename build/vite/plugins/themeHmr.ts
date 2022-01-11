import { Plugin } from 'vite'
import { themePreprocessorHmrPlugin } from '@zougt/vite-plugin-theme-preprocessor'

export function createThemeHmrPlugin() {
  const themeHmtPlugin: Plugin[] = themePreprocessorHmrPlugin() // 主题热更新，
  return themeHmtPlugin
}
