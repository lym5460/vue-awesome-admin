<script lang="ts" setup>
const { t } = useI18n()
const router = useRouter()
</script>

<script lang="ts">
export default {
  name: '404',
}
</script>

<template>
  <div>{{ t('not-found') }}</div>
  <el-button @click="router.back()">back</el-button>
</template>

<style lang="scss" scoped></style>
