<script lang="ts" setup></script>

<script lang="ts">
export default {
  name: 'Default',
}
</script>

<template>
  <el-container class="h-screen">
    <el-aside class="bg-green-300"> 侧边栏 </el-aside>
    <el-container>
      <el-header class="bg-blue-300">header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer class="bg-gray-500">footer</el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 60px;
  background-color: aquamarine;
}
</style>
