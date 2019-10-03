<template>
  <div class="top">
    <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">Content</div>
    <Breadcrumbs :currentPage="{ name: 'Top' }" />
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
