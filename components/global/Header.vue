<template>
  <a-layout-header class="header">
    <div class="header-logo" />
    <a-menu
      class="header-menu"
      theme="dark"
      mode="horizontal"
      :defaultSelectedKeys="[path]"
      :selectedKeys="[path]"
    >
      <a-menu-item
        class="header-menu-item"
        v-for="item in items"
        :key="item.to"
      >
        <nuxt-link :to="item.to">
          {{ item.title }}
        </nuxt-link>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script>
import CONST from '@/const'

export default {
  name: 'Header',
  props: {
    path: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      items: CONST.Header.items
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  &-logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 50px;
    float: left;
  }

  &-menu {
    line-height: 64px;
    &-item {
      width: 80px;
      padding: 0 10px;
      text-align: center;
    }
  }
}
</style>
