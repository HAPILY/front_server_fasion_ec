<template>
  <div class="itemInfo">
    <h1 class="itemInfo-title">
      {{ item.name }}
    </h1>
    <h2 class="itemInfo-price">
      ¥{{ priceComma(item.price) }} (税込)
    </h2>
    <div class="itemInfo-stock">
      <p>在庫あり</p>
      <a-button
        class="itemInfo-btn"
        type="primary"
        @click="addCart"
      >
        カートに入れる
      </a-button>
    </div>
    <div class="itemInfo-description">
      <h2>アイテム説明</h2>
      <div
        class="itemInfo-content"
        v-html="item.content"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemInfo',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    priceComma() {
      return function(price) {
        return String(price).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
      }
    }
  },
  methods: {
    addCart() {
      const cart = JSON.parse(localStorage.getItem("cart"));
      if (cart) {
        const item = cart.find(v => {
          return v.id === this.item.id
        });
        if (item) {
          item.num++
        } else {
          cart.push({
            id: item.id,
            num: 1
          })
        }
        localStorage.setItem("cart", JSON.stringify(cart));
      } else {
        localStorage.setItem("cart", JSON.stringify([{
          id: this.item.id,
          num: 1
        }]));
      }
      location.href = "/store/cart";
    }
  }
}
</script>

<style lang="scss" scoped>
.itemInfo {
  width: 48%;
  @include media(sm) {
    width: 100%;
  }

  &-title {
    font-size: 32px;
    font-weight: bold;
    margin: 20px 0 30px;
    @include media(sm) {
      font-size: 18px;
      margin: 20px 0;
    }
  }
  &-price {
    font-size: 18px;
    margin-bottom: 28px;
  }
  &-stock {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    @include media(sm) {
      display: block;
    }
    > p {
      margin-right: 30px;
      @include media(sm) {
        font-size: 14px;
        margin-bottom: 5px;
      }
    }
  }
  &-btn {
    @include media(sm) {
      display: block;
      width: 100%;
    }
  }
  &-description {
    font-size: 18px;
    > h2 {
      margin-bottom: 20px;
    }
  }
  &-content {
    font-size: 16px;
    line-height: 1.4;
  }
}
</style>
