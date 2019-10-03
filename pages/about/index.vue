<template>
  <div class="about">
    <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">About</div>
    <Breadcrumbs :currentPage="{ name: 'About' }" />
  </div>
</template>

<script>
import Breadcrumbs from "@/components/global/Breadcrumbs.vue";

export default {
  components: {
    Breadcrumbs
  }
};
</script>
