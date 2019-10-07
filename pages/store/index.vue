<template>
  <div class="store">
    <h1 class="store-title">
      Online Store
    </h1>
    <div class="store-visual">
      <img
        alt="example"
        src="~/assets/images/demo.png"
        slot="cover"
      >
    </div>
    <section class="store-section">
      <h2 class="store-subtitle">
        Pickup Item
      </h2>
      <span class="_detail">ピックアップアイテム</span>
      <div class="store-pickup-list">
        <Card
          v-for="item in pickup"
          :key="item.id"
          class="store-pickup-item"
          :src="item.images[0].src"
          :title="item.name"
          :description="`￥${priceComma(item.price)}`"
        />
      </div>
    </section>

    <section class="store-section">
      <h2 class="store-subtitle">
        New Item
      </h2>
      <span class="_detail">最新アイテム</span>
      <div class="store-new-list">
        <Card
          v-for="item in rank"
          :key="item.id"
          class="store-new-item"
          :src="item.images[0].src"
          :title="item.name"
          :description="`￥${priceComma(item.price)}`"
        />
      </div>
    </section>
    <Breadcrumbs :currentPage="{ name: 'ストア' }" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Breadcrumbs from "@/components/global/Breadcrumbs.vue";
import Card from "@/components/card/Card";

export default {
  components: {
    Breadcrumbs,
    Card
  },
  computed: {
    ...mapGetters('item', {
      pickupList: 'pickupList',
      rankList: 'rankList'
    }),
    pickup() {
      return this.pickupList
    },
    rank() {
      return this.rankList
    },
    priceComma() {
      return function(price) {
        return String(price).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
      }
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    ...mapActions('item', {
      fetchPickupList: 'fetchPickupList',
      fetchRankList: 'fetchRankList'
    }),
    async fetch() {
      await Promise.all([this.fetchPickupList(), this.fetchRankList()])
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

  &-section {
    margin-bottom: 20px;
  }

  &-visual {
    margin-bottom: 30px;
    text-align: center;

    > img {
      @include media(sm) {
        width: 100%;
      }
    }
  }

  &-title,
  &-subtitle {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    font-family: Garton;
  }

  &-title {
    margin-bottom: 28px;
  }

  &-new,
  &-pickup {
    &-list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    &-item {
      display: inline-block;
      width: 19%;
      margin-bottom: 10px;
      @include media(sm) {
        width: 49%;
        border: 1px solid color(gray, light);
      }
    }
  }
}

._detail {
  display: block;
  text-align: center;
  font-size: 12px;
  margin-bottom: 28px;
}
</style>
