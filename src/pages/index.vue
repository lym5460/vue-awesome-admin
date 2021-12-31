<script setup lang="ts">
import { useCounterStore } from '@/store/couter'
import { storeToRefs } from 'pinia'
import { CircleClose } from '@element-plus/icons-vue'
import { useLocaleStore } from '@/store/locale'

const counterStore = useCounterStore()
const settingStore = useLocaleStore()
const { count } = storeToRefs(counterStore)
const { lang } = storeToRefs(settingStore)
const { changeLang } = settingStore

const toggleLang = () => {
  if (lang.value === 'en') {
    changeLang('zh-CN')
  } else {
    changeLang('en')
  }
}
const { t } = useI18n()
</script>

<template>
  <div>我是主页</div>
  <div>{{ count }}</div>
  <el-button @click="counterStore.addCount">{{ t('button.go') }}</el-button>
  <el-icon class="text-green-400 text-2xl">
    <circle-close />
  </el-icon>
  <el-button @click="toggleLang()">{{ t('button.about') }}</el-button>
  <el-color-picker></el-color-picker>
</template>

<style lang="scss" scoped></style>
