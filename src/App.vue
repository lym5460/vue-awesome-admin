<script setup lang="ts">
const d = ref(1)
const { t, locale } = useI18n()
</script>
<template>
  <h1 text="green-500 5xl underline" underline="blue-500" class="bg-yellow-300">Hello world!</h1>
  <div class="">{{ t('button.about') }}</div>
  <button class="border-width-2">2222</button>
  <div>{{ locale }}</div>
  <div>{{ d }}</div>
  <i-carbon-accessibility color="red" class="text-xl" />
  <HelloWorld></HelloWorld>
  <el-button>primary</el-button>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
