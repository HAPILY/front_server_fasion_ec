<template>
  <div class="store-top">
    <section class="store-top-section">
      <h2 class="store-top-subtitle">
        Category2
      </h2>
      <span class="_detail">カテゴリー2</span>
      <div class="store-top-pickup-list">
        <Card
          v-for="item in categoryList.result"
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
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { isExpired } from '@/utils/store'

const Card = () => import("@/components/card/Card");

export default {
  name: 'Category2',
  components: {
    Card
  },
  props: {
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters('item', {
      typeList: 'typeList'
    }),
    categoryList() {
      if (!this.typeList[this.type]) return {}
      return this.typeList[this.type]
    },
    priceComma() {
      return function(price) {
        return String(price).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
      }
    }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    ...mapActions('item', {
      fetchTypeList: 'fetchTypeList'
    }),
    async fetch() {
      let fetchList = []
      if (isExpired(this.categoryList)) {
        fetchList.push(this.fetchTypeList({ type: this.type }))
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
      font-size: 32px;
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
          width: 46%;
          margin-right: 4%;
          border: 1px solid color(gray, light);
          &:nth-of-type(2n) {
            margin-right: 0px;
            margin-left: 4%;
          }
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

@include media(sm) {
  /deep/ .ant-card-body {
    padding: 5px;
  }
}
</style>
