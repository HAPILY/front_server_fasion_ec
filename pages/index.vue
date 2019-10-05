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
  background: color(white, base);
  padding-bottom: 1px;
  min-height: 280px;

  &-carousel {
    img {
      width: 100%;
    }
  }

  &-news {
    text-align: center;
    font-family: Garton;
    font-size: 28px;
  }

  /deep/ .VueCarousel-dot-container {
    margin-top: 0px !important;
  }
  /deep/ .VueCarousel-dot {
    margin-top: 0px !important;
  }
}
</style>
