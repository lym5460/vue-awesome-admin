<script lang="ts" setup></script>

<script lang="ts">
export default {
  name: 'Default',
}
</script>

<template>
  <n-layout has-sider>
    <n-layout-sider></n-layout-sider>
    <n-layout>
      <n-layout-header></n-layout-header>
      <n-layout-content content-style="padding:24px">
        <router-view></router-view>
      </n-layout-content>
      <n-layout-footer></n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<style lang="scss" scoped></style>
