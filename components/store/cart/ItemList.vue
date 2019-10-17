<template>
  <div class="cart-list">
    <div
      v-for="(item, i) in list"
      class="cart-item"
      :key="i"
    >
      <picture class="cart-thumbnail">
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
      <div class="cart-item-description">
        <div class="cart-item-title">
          タイトル
        </div>
        <div class="cart-item-price">
          値段
        </div>
      </div>
      <div class="cart-item-remove">
        削除
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemList",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  &-item {
    display: flex;
    align-items: center;
    border-top: 1px solid color(gray, base);
    border-bottom: 1px solid color(gray, base);
    padding: 20px 0;

    &-description {
      padding: 20px;
      width: 50%;
    }
    &-title {
      margin-bottom: 16px;
      font-size: 16px;
      font-weight: bold;
    }
    &-price {
      font-size: 14px;
      line-height: 1.4;
    }
    &-remove {
      width: 20%;
      text-align: center;
    }
  }
  &-thumbnail {
    width: 30%;
    img {
      width: 100%;
    }
  }
}
</style>