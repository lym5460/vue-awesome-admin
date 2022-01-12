import { defineStore } from 'pinia'
import { Ref } from 'vue'
import { zhCN, enUS } from 'naive-ui'
import { NLocale } from 'naive-ui/lib/locales'

// 需要支持其他语言可自行添加
const naiveUILocales: { [x: string]: NLocale } = {
  'zh-CN': zhCN,
  en: enUS,
}

export const useLocaleStore = defineStore('locale', () => {
  /**
   * 统一国际化配置：自定义国际化配置+naiveUI国际化，
   */
  const { locale } = useI18n()
  const lang = ref(localStorage.getItem('lang') || 'zh-CN')
  const naiveUILocale: Ref<NLocale> = ref(naiveUILocales[lang.value])

  /**
   * 切换语言
   * @param language string (zh-CN,en)
   */
  const switchLang = (language: string) => {
    lang.value = language
  }

  watchEffect(() => {
    locale.value = lang.value
    localStorage.setItem('lang', lang.value)
    naiveUILocale.value = naiveUILocales[lang.value]
  })

  return { lang, naiveUILocale, switchLang }
})
