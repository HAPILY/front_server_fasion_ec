<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-content style="padding: 0 50px">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        Store
      </div>
      <Breadcrumbs :currentPage="{ name: 'Store' }" />
    </a-layout-content>
  </a-layout>
</template>

<script>
import Breadcrumbs from '@/components/global/Breadcrumbs.vue'

export default {
  components: {
    Breadcrumbs
  }
}
</script>
