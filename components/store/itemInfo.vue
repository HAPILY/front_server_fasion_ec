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
      <a-button type="primary">
        カートに入れる
      </a-button>
    </div>
    <div class="itemInfo-description">
      <h2>アイテム説明</h2>
      <div
        class="itemInfo-content"
        v-html="$sanitize(item.content)"
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
  }
}
</script>

<style lang="scss" scoped>
.itemInfo {
  width: 48%;

  &-title {
    font-size: 24px;
    font-weight: bold;
    margin: 20px 0 30px;
  }
  &-price {
    font-size: 18px;
    margin-bottom: 28px;
  }
  &-stock {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    > p {
      margin-right: 30px;
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
