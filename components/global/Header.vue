<template>
  <div class="header">
    <a-layout-header
      v-if="media(['xl', 'lg', 'md'])"
      class="header-nav"
    >
      <div class="header-logo">
        <nuxt-link to="/">
          <img
            src="https://placehold.jp/120x40.png"
            alt="img.alt"
          >
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
      <div :class="[{'header-nonStore': !isStore}, 'header-icons']">
        <a-input-search
          class="header-search"
          placeholder="Search Items"
          @search="onSearch"
        />
        <div class="header-cart">
          <nuxt-link to="/store/cart">
            <a-icon
              class="header-icon"
              type="shopping-cart"
            />
          </nuxt-link>
        </div>
        <div class="header-login">
          <div
            v-if="userProfile"
            class="header-userName"
          >
            {{ userProfile.name }}
          </div>
          <nuxt-link
            v-else
            to="/login"
          >
            <a-icon
              class="header-icon"
              type="login"
            />
          </nuxt-link>
        </div>
      </div>
    </a-layout-header>
    <SPHeader
      v-if="media(['sm'])"
      :path="path"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CONST from "@/const";
import Layout from '@/mixins/layout'

import SPHeader from "./SPHeader"

export default {
  name: "Header",
  components: {
    SPHeader
  },
  mixins: [Layout],
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
  computed: {
    ...mapGetters("user", {
      getProfile: "user"
    }),
    isStore() {
      return this.$route.path.split("/")[1] === 'store'
    },
    userProfile() {
      return this.getProfile.result
    }
  },
  methods: {
    onCollapse(collapsed) {
      this.collapsed = collapsed
    },
    onClose() {
      this.onCollapse(true)
    },
    onSearch (value) {
      console.log(value)
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  z-index: 2;
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

  &-icons {
    display: flex;
    align-items: center;
    width: 33%;
    height: 100%;
    position: absolute;
    right: 30px;
    top: 0;
  }
  &-cart,
  &-login {
    cursor: pointer;
  }
  &-cart {
    margin-right: 20px;
  }
  &-icon {
    color: color(white, base);
    > svg {
      width: 26px;
      height: 26px;
    }
  }
  &-search {
    width: 200px;
    margin-right: 30px;
  }
  &-userName {
    font-size: 14px;
    color: color(white, base);
  }

  &-nonStore {
    display: none;
  }
}
</style>
