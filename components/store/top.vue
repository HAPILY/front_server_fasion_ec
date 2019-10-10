<template>
  <div class="store-top">
    <section class="store-top-section">
      <h2 class="store-top-subtitle">
        Pickup Item
      </h2>
      <span class="_detail">ピックアップアイテム</span>
      <div class="store-top-pickup-list">
        <Card
          v-for="item in pickup.result"
          :key="item.id"
          class="store-top-pickup-item"
          :src="item.images[0].src"
          :webp="item.images[0].webp"
          :title="item.name"
          :description="`￥${priceComma(item.price)}`"
          :path="`/store/${item.id}`"
        />
      </div>
    </section>

    <section class="store-top-section">
      <h2 class="store-top-subtitle">
        New Item
      </h2>
      <span class="_detail">最新アイテム</span>
      <div class="store-top-new-list">
        <Card
          v-for="item in rank.result"
          :key="item.id"
          class="store-top-new-item"
          :src="item.images[0].src"
          :webp="item.images[0].webp"
          :title="item.name"
          :description="`￥${priceComma(item.price)}`"
          :path="`/store/${item.id}`"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { isExpired } from '@/utils/store'

const Card = () => import("@/components/card/Card");

export default {
  name: 'StoreTop',
  components: {
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
      let fetchList = []
      if (isExpired(this.pickup)) {
        fetchList.push(this.fetchPickupList())
      }

      if (isExpired(this.rank)) {
        fetchList.push(this.fetchRankList())
      }
      await Promise.all(fetchList)
    }
  }
}
</script>

<style lang="scss" scoped>
.store {
  &-top {
    &-section {
      margin-bottom: 20px;
    }

    &-title,
    &-subtitle {
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      font-family: Garton;
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
}

._detail {
  display: block;
  text-align: center;
  font-size: 12px;
  margin-bottom: 28px;
}
</style>