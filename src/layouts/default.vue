<script lang="ts" setup></script>

<script lang="ts">
export default {
  name: 'Default',
}
</script>

<template>
  <el-container class="h-screen">
    <el-aside> 侧边栏 </el-aside>
    <el-main>
      <el-header>header</el-header>
      <el-footer>footer</el-footer>
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 60px;
  background-color: aquamarine;
}
</style>
