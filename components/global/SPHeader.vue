<template>
  <div class="header-sp">
    <div
      class="header-sp-bg"
      v-show="!collapsed"
      @click="onClose"
    />
    <a-layout-sider
      v-model="collapsed"
      class="header-sp-sider"
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
          class="header-sp-menu-item"
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
          class="header-sp-trigger"
          :type="collapsed ? 'menu-unfold' : 'close'"
          @click="()=> collapsed = !collapsed"
        />
        <div class="header-sp-logo">
          <nuxt-link to="/">
            <img
              src="https://placehold.jp/120x40.png"
              alt="img.alt"
            >
          </nuxt-link>
        </div>
      </a-layout-header>
    </a-layout>
    <div :class="[{'header-sp-nonStore': !isStore}, 'header-sp-icons']">
      <div class="header-sp-cart">
        <a-icon
          class="header-sp-icon"
          type="shopping-cart"
        />
      </div>
      <div class="header-sp-login">
        <a-dropdown v-if="userProfile">
          <div class="header-sp-userName">
            {{ userProfile.firstName }}様
          </div>
          <a-menu slot="overlay">
            <a-menu-item class="header-sp-dropdown-menu">
              <a href="/logout">ログアウト</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
        <nuxt-link
          v-else
          to="/login"
        >
          <a-icon
            class="header-sp-icon"
            type="login"
          />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CONST from "@/const";

export default {
  name: 'SPHeader',
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
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  &-sp {
    &-head {
      display: flex;
      align-items: center;
      background: #001529;
    }
    &-sider {
      position: fixed;
      height: 100vh;
    }
    &-logo {
      display: block;
      margin: 0px auto;
      float: none;
      padding-top: 0;
      background: none;
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

    &-trigger {
      position: absolute;
      left: 15px;
      color: color(white, base);
      > svg {
        width: 26px;
        height: 26px;
      }
    }

    &-icons {
      display: flex;
      align-items: center;
      height: 100%;
      position: absolute;
      right: 30px;
      top: 0;
      @include media(sm) {
        right: 20px;
      }
    }
    &-cart {
      margin-right: 30px;
      @include media(sm) {
        margin-right: 20px;
      }
    }
    &-icon {
      color: color(white, base);
      > svg {
        width: 26px;
        height: 26px;
      }
    }
    &-userName {
      font-size: 12px;
      color: color(white, base);
    }
    &-dropdown {
      &-menu {
        padding: 14px;
      }
    }

    &-nonStore {
      display: none;
    }
  }
}

/deep/ .ant-layout-sider-children {
  width: 100%;
  position: absolute;
  padding-top: 60px;
  top: 0px;
  left: 0px;
  background: rgb(0, 21, 41);
}
/deep/ .ant-layout-sider-zero-width-trigger {
  width: 40px;
  top: -55px;
  left: 15px;
}
</style>
