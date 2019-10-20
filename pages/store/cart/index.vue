<template>
  <div class="cart">
    <h1 class="cart-title">
      Shopping Cart
    </h1>
    <div class="cart-content">
      <ItemList
        v-if="list.length !== 0"
        :list="list"
        @remove="removeItem"
        @update="update"
      />
      <div
        v-if="list.length === 0"
        class="cart-not"
      >
        カートに商品は入っていません。
      </div>
      <div
        v-if="list.length !== 0"
        class="cart-btns"
      >
        <div class="cart-total">
          商品合計 ¥{{ total }}
        </div>
        <!-- レジ or ログイン -->
        <payjp-checkout
          class="cart-regi"
          :api-key="public_key"
          text="カードを情報を入力して購入"
          submit-text="購入確定"
          name-placeholder="田中 太郎"
          @created="onTokenCreated"
          @failed="onTokenFailed"
        />
        <nuxt-link to="/store">
          <a-button
            class="cart-shopping"
          >
            ショッピングを続ける
          </a-button>
        </nuxt-link>
      </div>
    </div>
    <Breadcrumbs
      :parentPages="[
        { path: '/', name: 'トップ' },
        { path: '/store', name: 'ストア' }
      ]"
      :currentPage="{ name: 'カート' }"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PayjpCheckout from "vue-payjp-checkout";
import UserProfile from "~/mixins/userProfile";

const Breadcrumbs = () => import("~/components/global/Breadcrumbs");
const ItemList = () => import("~/components/store/cart/ItemList");

export default {
  components: {
    Breadcrumbs,
    ItemList,
    PayjpCheckout
  },
  mixins: [UserProfile],
  data() {
    return {
      total: 0,
      public_key: process.env.PAYJP_PUBLIC_KEY
    }
  },
  computed: {
    ...mapGetters("item", {
      getIdList: "idList"
    }),
    list() {
      if (!this.getIdList.result) return []
      return this.getIdList.result
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    ...mapActions("item", {
      fetchIdList: "fetchIdList",
      updateIdList: "updateIdList",
      postPurchase: "postPurchase"
    }),
    async fetch() {
      const cart = JSON.parse(localStorage.getItem("cart"));
      if (cart) {
        const cartId = cart.map(v => v.id);
        await this.fetchIdList({ ids: cartId });
        this.totalPrice();
      }
    },
    async removeItem(item) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      const newCart = cart.find(v => v.id !== item.id);
      newCart
        ? localStorage.setItem("cart", JSON.stringify(newCart))
        : localStorage.removeItem("cart")
      await this.updateIdList({ cart: newCart });
    },
    totalPrice() {
      let total = 0
      const cart = JSON.parse(localStorage.getItem("cart"));
      this.list.forEach(v => {
        const num = cart.find(vv => vv.id === v.id).num
        total += (v.price * num)
      });
      this.total = String(total).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    },
    update() {
      this.totalPrice()
    },
    // カードのToken化に成功したら呼ばれる。そのTokenでそのまま商品購入にうつる。
    async onTokenCreated(token) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      const data = {
        token: token.id,
        item: cart
      }
      const res = await this.postPurchase(data);
      this.$notification.config({
        placement: "bottomLeft",
      });
      this.$notification["success"]({
        message: res.message
      });
      localStorage.removeItem("cart");
      await this.updateIdList({ cart: undefined });
    },
    // Token化に失敗したら呼ばれる。
    onTokenFailed() {
      this.$notification.config({
        placement: "bottomLeft",
      });
      this.$notification["error"]({
        message: "購入に失敗しました"
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  height: 100%;
  position: relative;
  background: color(white, base);
  padding: 24px;
  padding-bottom: 8px;
  min-height: 280px;

  &-title {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    font-family: Garton;
    margin-bottom: 28px;
  }

  &-content {
    display: flex;
    justify-content: space-around;
    margin-bottom: 36px;
  }

  &-btns {
    width: 30%;
    margin: 0 0 auto 0;
    padding: 20px;
    border: 1px solid color(gray, base);
    border-radius: 8px;
  }
  &-regi {
    width: 100%;
    margin-bottom: 26px;
  }
  &-shopping {
    width: 100%;
  }
  &-not {
    margin: 50px;
  }
  &-total {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
