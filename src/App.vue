<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useLocaleStore } from './store/locale'

const settingStore = useLocaleStore()
const { elementPlusLocale } = storeToRefs(settingStore)
</script>

<template>
  <el-config-provider :locale="elementPlusLocale">
    <router-view></router-view>
  </el-config-provider>
</template>

<style lang="scss"></style>
