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
    <div class="header-bg"
      v-show="!collapsed"
      @click="onClose"
    />
    <a-layout-sider
      v-model="collapsed"
      class="header-sider"
      breakpoint="lg"
      collapsedWidth="0"
      @collapse="onCollapse"
      :trigger="null"
    >
      <a-menu
        theme="dark"
        mode="inline"
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
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header-sp-head">
        <a-icon
          class="header-trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
        <div class="header-sp-logo">
          <nuxt-link to="/">
            <img src="https://placehold.jp/120x40.png">
          </nuxt-link>
        </div>
      </a-layout-header>
    </a-layout>
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
      display: block;
      margin: 0px auto;
      float: none;
      padding-top: 10px;
      background: none;
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

  &-bg {
    display: none;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: color(black, base);
    opacity: 0.3;
    @include media(sm) {
      display: block;
    }
  }

  &-sp {
    &-head {
      display: flex;
      align-items: center;
      background: color(white, base);
    }
    &-logo {
      margin: 0 auto;
      display: block;
    }
  }

  &-trigger {
    position: absolute;
    left: 15px;
    > svg {
      width: 36px;
      height: 36px;
    }
  }

  /deep/ .ant-layout-sider-children {
    width: 100%;
    position: absolute;
    padding-top: 64px;
    top: -64px;
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
