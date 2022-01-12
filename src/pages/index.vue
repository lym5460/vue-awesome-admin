<script lang="ts" setup>
import { useLocaleStore } from '@/store/locale'
import { useThemeStore } from '@/store/theme'
import { themeConfig } from '@/theme/config'
import { useThemeVars } from 'naive-ui'
const { t } = useI18n()
const localeStore = useLocaleStore()
const { switchLang } = localeStore
const timestamp = ref()

const { switchTheme } = useThemeStore()

const railStyle = ({ focused, checked }: any) => {
  const style = {} as any
  if (checked) {
    style.background = useThemeVars().value.primaryColor
    if (focused) {
      style.boxShadow = '0 0 0 2px #d0305040'
    }
  } else {
    style.background = useThemeVars().value.primaryColor
    if (focused) {
      style.boxShadow = '0 0 0 2px #2080f040'
    }
  }
  return style
}
</script>

<template>
  <div class="container">
    <n-h2 prefix="bar">国际化</n-h2>
    <n-space>
      <n-button @click="switchLang('zh-CN')">{{ t('button.chinese') }}</n-button>
      <n-button type="tertiary" @click="switchLang('en')">{{ t('button.english') }}</n-button>
      <n-button type="primary">{{ t('button.about') }}</n-button>
      <n-button type="info">{{ t('button.back') }}</n-button>
      <n-button type="success">{{ t('button.go') }}</n-button>
      <n-button type="warning">{{ t('button.toggle_dark') }}</n-button>
      <n-button type="error">{{ t('button.toggle_langs') }}</n-button>
      <n-date-picker v-model:value="timestamp" type="date" clearable />
    </n-space>
    <n-h2 prefix="bar">深色模式/浅色模式</n-h2>
    <n-space>
      <n-switch
        checked-value="dark"
        unchecked-value="light"
        :rail-style="railStyle"
        :on-update:value="
          (value) => {
            switchTheme(value)
          }
        "
      >
        <template #checked>
          <div>浅色</div>
        </template>
        <template #unchecked>
          <div>深色</div>
        </template>
      </n-switch>
    </n-space>
    <n-h2 prefix="bar">切换主题色</n-h2>
    <n-space>
      <n-button
        v-for="(color, scope) in themeConfig"
        :key="scope"
        :style="{ backgroundColor: color }"
        @click="switchTheme(scope as string)"
      ></n-button>
    </n-space>
  </div>
</template>

<style lang="scss" scoped></style>
