<template>
  <div class="header">
    <a-layout-header class="header-nav">
      <div class="header-logo">
        <nuxt-link to="/">
          <img src="https://placehold.jp/120x40.png">
        </nuxt-link>
      </div>
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
    <SPHeader :path="path" />
  </div>
</template>

<script>
import CONST from "@/const";
import SPHeader from "./SPHeader"

export default {
  name: "Header",
  components: {
    SPHeader
  },
  props: {
    path: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      items: CONST.Header.items,
      collapsed: false
    };
  },
  methods: {
    onCollapse(collapsed) {
      this.collapsed = collapsed
    },
    onClose() {
      this.onCollapse(true)
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
      display: none;
    }
  }
  &-sider {
    @include media(md, lg, xl) {
      display: none;
    }
  }
  &-logo {
    width: 120px;
    height: 40px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 50px;
    float: left;
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

  /deep/ .ant-layout-sider-children {
    width: 100%;
    position: absolute;
    padding-top: 64px;
    top: 0px;
    left: 0px;
    background: rgb(0, 21, 41);
  }
  /deep/ .ant-layout-sider-zero-width-trigger {
    width: 40px;
    top: -55px;
    left: 15px;
  }
}
</style>
