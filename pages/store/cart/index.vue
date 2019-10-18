<template>
  <div class="cart">
    <h1 class="cart-title">
      Shopping Cart
    </h1>
    <div class="cart-content">
      <ItemList
        v-if="list.length !== 0"
        :list="list"
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
        <!-- レジ or ログイン -->
        <a-button
          class="cart-regi"
          type="primary"
        >
          レジへ進む
        </a-button>
        <a-button
          class="cart-shopping"
        >
          ショッピングを続ける
        </a-button>
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

const Breadcrumbs = () => import("~/components/global/Breadcrumbs");
const ItemList = () => import("~/components/store/cart/ItemList");

export default {
  components: {
    Breadcrumbs,
    ItemList
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
      fetchIdList: "fetchIdList"
    }),
    async fetch() {
      const cart = JSON.parse(localStorage.getItem("cart")).map(v => v.id);
      console.log(cart);
      if (cart) {
        await this.fetchIdList({ ids: cart })
      }
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
}
</style>
