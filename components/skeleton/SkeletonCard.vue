<template>
  <a-skeleton
    active
    :paragraph="{rows: 2}"
  />
</template>

<script>
export default {
  name: "SkeletonCard"
}
</script>

<style lang="scss" scoped>
/deep/ .ant-skeleton-title {
  width: 100% !important;
  height: 300px;
}
</style>
