<script lang="ts" setup>
import { Search, Edit, Check, Message, Star, Delete } from '@element-plus/icons-vue'
// import Color from 'color'
// import setCustomTheme from '@setCustomTheme'
import { toggleTheme } from '@zougt/vite-plugin-theme-preprocessor/dist/browser-utils.js'
import { useLocaleStore } from '@/store/locale'

const localeStore = useLocaleStore()
const { changeLang } = localeStore
const defaultTheme = () => {
  console.log('using default theme')
  toggleTheme({ scopeName: 'default' })
}
const darkTheme = () => {
  console.log('using dark theme')
  toggleTheme({ scopeName: 'dark' })
}
const date = ref()
const color = ref()
const predefineColors = ref(['#ff4500', '#ff8c00', '#ffd700', '#90ee90', '#00ced1', '#1e90ff'])
// watch(color, () => {
//   console.log(color.value)
//   // 设置任意主题色既可
//   setCustomTheme({
//     Color,
//     primaryColor: color.value,
//     //gradientReplacer:{},
//     //targetValueReplacer:{}
//   })
// })
</script>

<template>
  <main class="container">
    <el-row class="my-4">
      <el-col>
        <el-color-picker v-model="color" color-format="hex" :predefine="predefineColors" />
      </el-col>
    </el-row>

    <el-row class="my-4">
      <el-col :span="2"><el-button @click="changeLang('zh-CN')">中文</el-button></el-col>
      <el-col :span="2"><el-button @click="changeLang('en')">英文</el-button></el-col>
    </el-row>

    <el-row class="my-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
      <el-button>中文</el-button>
    </el-row>

    <el-row class="my-4">
      <el-button plain>Plain</el-button>
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="success" plain>Success</el-button>
      <el-button type="info" plain>Info</el-button>
      <el-button type="warning" plain>Warning</el-button>
      <el-button type="danger" plain>Danger</el-button>
    </el-row>

    <el-row class="my-4">
      <el-button round>Round</el-button>
      <el-button type="primary" round>Primary</el-button>
      <el-button type="success" round>Success</el-button>
      <el-button type="info" round>Info</el-button>
      <el-button type="warning" round>Warning</el-button>
      <el-button type="danger" round>Danger</el-button>
    </el-row>

    <el-row>
      <el-button :icon="Search" circle></el-button>
      <el-button type="primary" :icon="Edit" circle></el-button>
      <el-button type="success" :icon="Check" circle></el-button>
      <el-button type="info" :icon="Message" circle></el-button>
      <el-button type="warning" :icon="Star" circle></el-button>
      <el-button type="danger" :icon="Delete" circle></el-button>
    </el-row>

    <el-row class="my-4">
      <el-date-picker v-model="date" type="date" placeholder="Pick a day"> </el-date-picker>
    </el-row>

    <el-row>
      <el-button @click="defaultTheme">默认主题</el-button>
      <el-button @click="darkTheme">暗黑主题</el-button>
    </el-row>
  </main>
</template>

<style lang="scss" scoped>
@import '../theme/dark.scss';
// @import 'element-plus/theme-chalk/src/common/var.scss';
.container {
  background-color: $bg;
}
</style>
