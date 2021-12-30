<script setup lang="ts">
import { useCounterStore } from '@/store/couter'
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()
const { count } = storeToRefs(counterStore)
</script>
<template>
  <div>我是主页</div>
  <div>{{ count }}</div>
  <button @click="counterStore.addCount">add</button>
</template>
<style lang="scss" scoped></style>
