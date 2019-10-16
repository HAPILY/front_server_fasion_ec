<template>
  <div class="store">
    <h1 class="store-title">
      Online Store
    </h1>
    <div class="store-visual">
      <picture>
        <source
          srcset="~/assets/images/demo.webp"
          class="img"
          type="image/webp"
        >
        <img
          alt="example"
          src="~/assets/images/demo.png"
          slot="cover"
        >
      </picture>
    </div>
    <div class="store-tabWrap">
      <div class="store-tab">
        <a-menu
          v-model="current"
          mode="horizontal"
        >
          <a-menu-item
            key="category1"
            class="store-tab-item"
          >
            <a-icon type="home" />Top
          </a-menu-item>
          <a-menu-item
            key="category2"
            class="store-tab-item"
          >
            <a-icon type="mail" />category2
          </a-menu-item>
          <a-menu-item
            key="category3"
            class="store-tab-item"
          >
            <a-icon type="crown" />category3
          </a-menu-item>
          <a-menu-item
            key="category4"
            class="store-tab-item"
          >
            <a-icon type="shopping" />category4
          </a-menu-item>
        </a-menu>
      </div>
    </div>
    <StoreTop v-if="current[0] === 'category1'" />
    <StoreCategory
      v-if="current[0] === 'category2'"
      type="category2"
    />
    <StoreCategory
      v-if="current[0] === 'category3'"
      type="category3"
    />
    <StoreCategory
      v-if="current[0] === 'category4'"
      type="category4"
    />
    <Breadcrumbs
      :parentPages="[
        { path: '/', name: 'トップ' }
      ]"
      :currentPage="{ name: 'ストア' }"
    />
  </div>
</template>

<script>
import UserProfile from "~/mixins/userProfile";
const Breadcrumbs = () => import("~/components/global/Breadcrumbs");
const StoreTop = () => import("~/components/store/Top");
const StoreCategory = () => import("~/components/store/Category2");

export default {
  components: {
    Breadcrumbs,
    StoreTop,
    StoreCategory
  },
  mixins: [UserProfile],
  data() {
    return {
      current: ['category1']
    }
  }
};
</script>

<style lang="scss" scoped>
.store {
  height: 100%;
  position: relative;
  background: color(white, base);
  padding: 24px;
  padding-bottom: 8px;
  min-height: 280px;

  &-tabWrap {
     text-align: center;
     @include media(sm) {
      display: none;
    }
  }
  &-tab {
    display: inline-block;
    border-bottom: 1px solid color(gray, base);
    margin-bottom: 30px;
    &-item {
      padding: 0 40px;
      line-height: 32px;
    }
  }

  &-visual {
    margin-bottom: 30px;
    text-align: center;

    img {
      @include media(sm) {
        width: 100%;
      }
    }
  }

  &-title {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    font-family: Garton;
    margin-bottom: 28px;
  }
}
</style>
