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
          {{ item.name }}
        </div>
        <div class="cart-item-price">
          ¥{{ priceComma(item.price) }} (税込)
        </div>
      </div>
      <div class="cart-num">
        <div class="cart-num-group-button">
          <span
            class="cart-number-decrement"
            @click="decrementItem(item)"
          >
            -
          </span>
        </div>
        <input
          class="cart-number"
          type="number"
          :value="itemNum(item)"
          min="0"
          max="10"
        >
        <div class="cart-num-group-button">
          <span
            class="cart-number-increment"
            @click="incrementItem(item)"
          >
            +
          </span>
        </div>
      </div>
      <div
        class="cart-item-remove"
        @click="removeItem(item)"
      >
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
  },
  computed: {
    priceComma() {
      return function(price) {
        return String(price).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
      }
    },
    itemNum() {
      return function(item) {
        const cart = JSON.parse(localStorage.getItem("cart"));
        return cart.find(v => v.id === item.id).num
      }
    }
  },
  methods: {
    removeItem(item) {
      this.$emit("remove", item);
    },
    decrementItem(item) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      const cartNum = cart.find(v => v.id === item.id);
      if (cartNum.num === 1) {
        this.$emit("remove", item);
      } else if (cartNum.num <= 0) {
        return
      } else {
        cartNum.num--;
        localStorage.setItem("cart", JSON.stringify(cart));
      }
      // TODO reactiveにする方法
      this.$forceUpdate()
      this.$emit("update");
    },
    incrementItem(item) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      const cartNum = cart.find(v => v.id === item.id);
      if (cartNum.num >= 10) {
        return
      } else {
        cartNum.num++;
        localStorage.setItem("cart", JSON.stringify(cart));
      }
      this.$forceUpdate()
      this.$emit("update");
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
    margin-right: 20px;

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

  &-num {
    display: flex;
    justify-content: center;

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
      appearance: none;
    }
  }
  &-number {
    width: 40px;
    padding: 0;
    text-align: center;
    outline: none;
    display: block;
    margin: 0;
  }
  &-number,
  &-number-decrement,
  &-number-increment {
    border: 1px solid color(gray, base);
    height: 40px;
    user-select: none;
    border-radius: 4px;
  }
  &-number-decrement,
  &-number-increment {
    display: inline-block;
    width: 40px;
    background: color(gray, light);
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    line-height: 40px;
  }
  &-number-decrement {
    margin-right: 0.3rem;
  }
  &-number-increment {
    margin-left: 0.3rem;
  }
}
</style>