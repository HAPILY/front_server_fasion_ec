<template>
  <div class="store">
    <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">Store</div>
    <Breadcrumbs :currentPage="{ name: 'ストア' }" />
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
