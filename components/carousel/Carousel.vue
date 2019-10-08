<template>
  <VueCarousel
    class="carousel"
    :per-page="1"
    :autoplay="autoplay"
    :loop="loop"
    :autoplay-timeout="timeout"
  >
    <Slide
      v-for="(img, i) in images"
      :key="i"
    >
      <img
        :src="img.src"
        :alt="img.alt"
      >
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
    images: {
      type: Array,
      required: true
    },
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
</style>
