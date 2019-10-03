<template>
  <a-breadcrumb class="breadcrumb">
    <a-breadcrumb-item v-for="page in parentPages" :key="page.name">
      <nuxt-link :to="page.path">{{ page.name }}</nuxt-link>
    </a-breadcrumb-item>
    <a-breadcrumb-item>{{ currentPage.name }}</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
  name: "Breadcrumbs",
  props: {
    currentPage: {
      type: Object,
      required: true
    },
    parentPages: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  margin: 16px 0;
  font-size: 12px;
}
</style>
