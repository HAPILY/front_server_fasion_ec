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
import VueCarousel from "vue-carousel/src/Carousel.vue";
import Slide from "vue-carousel/src/Slide.vue";

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
