<template>
  <div class="top">
    <Carousel
      class="top-carousel"
      :per-page="1"
      :autoplay="true"
      :loop="true"
      :autoplay-timeout="10000"
    >
      <Slide>
        <img src="https://placehold.jp/600x200.png" />
      </Slide>
      <Slide>
        <img src="http://placehold.jp/24/cc9999/993333/600x200.png" />
      </Slide>
      <Slide>
        <img src="http://placehold.jp/24/20A0E0/fad867/600x200.png" />
      </Slide>
    </Carousel>
    <h1 class="top-news">News</h1>
    <div class="top-news-list">
      <a-card class="top-news-item" hoverable>
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          slot="cover"
        />
        <a-card-meta title="Card title" description="This is the description" />
      </a-card>
      <a-card class="top-news-item" hoverable>
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          slot="cover"
        />
        <a-card-meta title="Card title" description="This is the description" />
      </a-card>
      <a-card class="top-news-item" hoverable>
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          slot="cover"
        />
        <a-card-meta title="Card title" description="This is the description" />
      </a-card>
    </div>
    <Breadcrumbs :currentPage="{ name: 'Top' }" />
  </div>
</template>

<script>
import Carousel from "vue-carousel/src/Carousel.vue";
import Slide from "vue-carousel/src/Slide.vue";
import Breadcrumbs from "@/components/global/Breadcrumbs.vue";

export default {
  components: {
    Carousel,
    Slide,
    Breadcrumbs
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
    margin: 0 -24px 20px;
    img {
      width: 100%;
    }
  }

  &-news {
    text-align: center;
    font-family: Garton;
    font-size: 28px;
    margin-bottom: 10px;

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

  /deep/ .VueCarousel-dot-container {
    margin-top: 0px !important;
  }
  /deep/ .VueCarousel-dot {
    margin-top: 0px !important;
  }
}
</style>
