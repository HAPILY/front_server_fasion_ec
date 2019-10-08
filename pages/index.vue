<template>
  <div class="top">
    <Carousel
      class="top-carousel"
      :per-page="1"
      :autoplay="true"
      :loop="true"
      :autoplay-timeout="10000"
      :images="carouselImage"
    />
    <section class="top-section">
      <h1 class="top-news">
        News
      </h1>
      <div class="top-news-list">
        <Card
          v-for="i in 3"
          :key="i"
          class="top-news-item"
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          title="Card title"
          description="This is the description"
        />
      </div>
      <a-button
        class="top-more"
        size="large"
        type="primary"
      >
        ニュースをもっと見る
        <a-icon type="right" />
      </a-button>
    </section>
    <section class="top-section">
      <h1 class="top-item">
        Items
      </h1>
      <div class="top-item-list">
        <Card
          v-for="item in list.result"
          :key="item.id"
          class="top-item-item"
          :src="item.images[0]"
          :title="item.name"
          :description="`￥${priceComma(item.price)}`"
        />
      </div>
      <a-button
        class="top-more"
        size="large"
        type="primary"
      >
        アイテムをもっと見る
        <a-icon type="right" />
      </a-button>
    </section>
    <section class="top-section">
      <h1 class="top-items">
        Online Store
      </h1>
      <a-button
        class="top-store"
        icon="shopping-cart"
        size="large"
        type="primary"
      >
        オンラインストアへ
      </a-button>
    </section>
    <Breadcrumbs :currentPage="{ name: 'Top' }" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { isExpired } from '@/utils/store'

import Breadcrumbs from "@/components/global/Breadcrumbs.vue";
import Card from "@/components/card/Card";
import Carousel from "@/components/carousel/Carousel";

export default {
  components: {
    Breadcrumbs,
    Card,
    Carousel
  },
  computed: {
    ...mapGetters("item", {
      getItemList: "list"
    }),
    list() {
      return this.getItemList;
    },
    carouselImage() {
      return [
        {
          src: "https://placehold.jp/600x200.png",
          alt: "example"
        },
        {
          src: "http://placehold.jp/24/cc9999/993333/600x200.png"
        },
        {
          src: "http://placehold.jp/24/20A0E0/fad867/600x200.png"
        }
      ];
    },
    priceComma() {
      return function(price) {
        return String(price).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
      }
    }
  },
  created() {
    this.fetch();
  },
  methods: {
    ...mapActions("item", {
      fetchItemList: "fetchList"
    }),
    async fetch() {
      if (isExpired(this.list)) {
        await this.fetchItemList();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.top {
  height: 100%;
  position: relative;
  background: color(white, base);
  margin: 0 24px;
  padding-bottom: 8px;
  min-height: 280px;

  &-carousel {
    margin: 0 -24px 30px;
  }

  &-section {
    margin-bottom: 30px;
    > h1 {
      text-align: center;
      font-family: Garton;
      font-size: 28px;
      margin-bottom: 10px;
    }
  }

  &-news,
  &-item {
    &-list {
      display: flex;
      justify-content: space-between;
      @include media(sm) {
        flex-wrap: wrap;
      }
    }

    &-item {
      display: inline-block;
      width: 33%;
      @include media(sm) {
        width: 100%;
        border: 1px solid color(gray, light);
      }
    }
  }

  &-store {
    display: block;
    margin: 20px auto;
    width: 50%;
  }

  &-more {
    display: block;
    margin: 5px auto;
  }

  /deep/ .VueCarousel-dot-container {
    margin-top: 0px !important;
  }
  /deep/ .VueCarousel-dot {
    margin-top: 0px !important;
  }
}
</style>
