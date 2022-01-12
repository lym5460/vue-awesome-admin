<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useLocaleStore } from './store/locale'
import { useThemeStore } from './store/theme'

const localeStore = useLocaleStore()
const { naiveUILocale } = storeToRefs(localeStore)

const themeStore = useThemeStore()
const { themeOverrides, darkTheme } = storeToRefs(themeStore)
</script>

<template>
  <n-config-provider :locale="naiveUILocale" :theme="darkTheme" :theme-overrides="themeOverrides">
    <router-view></router-view>
    <n-global-style />
  </n-config-provider>
</template>

<style lang="scss"></style>
