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
          v-for="news in limitNews"
          :key="news.id"
          class="top-news-item"
          :src="news.thumbnail"
          :title="news.title"
          :description="news.content"
          :path="`/news/${news.id}`"
        />
      </div>
      <nuxt-link to="/news">
        <a-button
          class="top-more"
          size="large"
          type="primary"
        >
          ニュースをもっと見る
          <a-icon type="right" />
        </a-button>
      </nuxt-link>
    </section>
    <section class="top-section">
      <h1 class="top-item">
        Items
      </h1>
      <div class="top-item-list">
        <Card
          v-for="item in limitItems"
          :key="item.id"
          class="top-item-item"
          :src="item.images[0]"
          :title="item.name"
          :description="`￥${priceComma(item.price)}`"
          :path="`/store/${item.id}`"
        />
      </div>
      <nuxt-link to="/store">
        <a-button
          class="top-more"
          size="large"
          type="primary"
        >
          アイテムをもっと見る
          <a-icon type="right" />
        </a-button>
      </nuxt-link>
    </section>
    <section class="top-section">
      <h1 class="top-items">
        Online Store
      </h1>
      <nuxt-link to="/store">
        <a-button
          class="top-store"
          icon="shopping-cart"
          size="large"
          type="primary"
        >
          オンラインストアへ
        </a-button>
      </nuxt-link>
    </section>
    <Breadcrumbs :currentPage="{ name: 'Top' }" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { isExpired } from '@/utils/store'

const Breadcrumbs = () => import("~/components/global/Breadcrumbs");
const Card = () => import("@/components/card/Card");
const Carousel = () => import("@/components/carousel/Carousel");

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
    ...mapGetters("news", {
      getNewsList: "list"
    }),
    items() {
      return this.getItemList;
    },
    newsList() {
      return this.getNewsList;
    },
    limitItems() {
      if (!this.items.result) return []
      return this.items.result.slice(0, 3);
    },
    limitNews() {
      if (!this.newsList.result) return []
      return this.newsList.result.slice(0, 3);
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
    ...mapActions("news", {
      fetchNewsList: "fetchList"
    }),
    async fetch() {
      let fetchList = []
      if (isExpired(this.items)) {
        fetchList.push(this.fetchItemList())
      }

      if (isExpired(this.newsList)) {
        fetchList.push(this.fetchNewsList())
      }
      await Promise.all(fetchList)
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
      margin-bottom: 20px;
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
