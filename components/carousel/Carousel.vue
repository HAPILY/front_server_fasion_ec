<template>
  <VueCarousel
    class="carousel"
    :per-page="1"
    :autoplay="autoplay"
    :loop="loop"
    :autoplay-timeout="timeout"
  >
    <Slide>
      <picture>
        <source
          srcset="~/assets/images/carousel1.webp"
          class="img"
          type="image/webp"
        >
        <img
          src="~/assets/images/carousel1.png"
          alt="img.alt"
        >
      </picture>
    </Slide>
    <Slide>
      <picture>
        <source
          srcset="~/assets/images/carousel2.webp"
          class="img"
          type="image/webp"
        >
        <img
          src="~/assets/images/carousel2.png"
          alt="img.alt"
        >
      </picture>
    </Slide>
  </VueCarousel>
</template>

<script>
const VueCarousel = () => import("vue-carousel/src/Carousel");
const Slide = () => import("vue-carousel/src/Slide");

export default {
  name: "Carousel",
  components: {
    VueCarousel,
    Slide
  },
  props: {
    autoplay: {
      type: Boolean,
      default: true
    },
    loop: {
      type: Boolean,
      default: true
    },
    timeout: {
      type: Number,
      default: 5000
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel {
  img {
    width: 100%;
  }
}

/deep/ .VueCarousel-inner {
  height: 100% !important;
}
/deep/ .VueCarousel-slide {
  height: 100% !important;
}
</style>
