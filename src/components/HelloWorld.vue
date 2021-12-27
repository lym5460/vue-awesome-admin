<template>
  <div class="text-red-400 text-2xl">Hello world</div>
  <div class="text-5xl">{{ timer }}</div>
</template>

<script setup lang="ts">
const timer = ref(0)
setInterval(() => {
  timer.value += 1
}, 1000)
</script>

<style scoped lang="scss">
div {
  background: darkcyan;
}
</style>
