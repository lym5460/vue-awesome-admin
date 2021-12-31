import { Language } from 'element-plus/es/locale'
import { defineStore } from 'pinia'
import { Ref } from 'vue'
import { en, zhCN } from '../../build/config/element-locales'

const elementPlusLocales: { [x: string]: Language } = {
  'zh-CN': zhCN,
  en: en,
}

export const useLocaleStore = defineStore('locale', () => {
  /**
   * 统一国际化配置：自定义国际化配置+elementPlus内容国际化，
   */
  const { locale } = useI18n()
  const lang = ref(localStorage.getItem('lang') || 'zh-CN')
  const elementPlusLocale: Ref<Language> = ref(elementPlusLocales[lang.value])

  const changeLang = (l: string) => {
    lang.value = l
  }

  watchEffect(() => {
    locale.value = lang.value
    localStorage.setItem('lang', lang.value)
    elementPlusLocale.value = elementPlusLocales[lang.value]
  })

  return { lang, elementPlusLocale, changeLang }
})
