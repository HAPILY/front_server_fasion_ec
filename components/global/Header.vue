<template>
  <div class="header">
    <a-layout-header class="header-nav">
      <div class="header-logo">
        <nuxt-link to="/">
          <img src="https://placehold.jp/120x40.png" />
        </nuxt-link>
      </div>
      <a-menu
        class="header-menu"
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="[path]"
        :selectedKeys="[path]"
      >
        <a-menu-item class="header-menu-item" v-for="item in items" :key="item.to">
          <nuxt-link :to="item.to">{{ item.title }}</nuxt-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-sider
      class="header-sider"
      breakpoint="lg"
      collapsedWidth="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="[path]" :selectedKeys="[path]">
        <a-menu-item class="header-menu-item">
          <nuxt-link to="/">
            <img src="https://placehold.jp/120x40.png" />
          </nuxt-link>
        </a-menu-item>
        <a-menu-item class="header-menu-item" v-for="item in items" :key="item.to">
          <nuxt-link :to="item.to">{{ item.title }}</nuxt-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
  </div>
</template>

<script>
import CONST from "@/const";

export default {
  name: "Header",
  props: {
    path: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      items: CONST.Header.items
    };
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  z-index: 2;
  &-nav {
    @include media(sm) {
      width: 100%;
    }
    > ul {
      @include media(sm) {
        display: none;
      }
    }
  }
  &-sider {
    @include media(md, lg, xl) {
      display: none;
    }
    @include media(sm) {
      position: fixed;
      height: 100vh;
    }
  }
  &-logo {
    width: 120px;
    height: 40px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 50px;
    float: left;
    @include media(sm) {
      display: none;
    }
  }

  &-menu {
    line-height: 72px;
    &-item {
      width: 80px;
      height: 72px;
      padding: 0 10px;
      text-align: center;
    }
  }

  /deep/ .ant-layout-sider-zero-width-trigger {
    top: -53px !important;
    right: -53px !important;
    width: 40px !important;
  }
  /deep/ .ant-layout-sider-children {
    position: absolute !important;
    top: -50px !important;
    left: 20px !important;
  }
}
</style>
