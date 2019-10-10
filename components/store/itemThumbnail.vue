<template>
  <div class="itemThumbnail">
    <div class="itemThumbnail-info">
      <!-- main -->
      <picture slot="cover">
        <source
          :srcset="thumbnailWebp"
          class="img"
          type="image/webp"
        >
        <img
          alt="example"
          :src="thumbnailSrc"
        >
      </picture>
    </div>
    <div class="itemThumbnail-list">
      <!-- list -->
      <div
        v-for="(image, i) in images"
        :key="i"
      >
        <picture @mouseover="changeThumbnail(image)">
          <source
            :srcset="image.wepb"
            class="img"
            type="image/webp"
          >
          <img
            alt="example"
            :src="image.src"
          >
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemThumbnail',
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      thumbnailSrc: this.images[0].src,
      thumbnailWebp: this.images[0].webp
    }
  },
  methods: {
    changeThumbnail(image) {
      this.thumbnailSrc = image.src
      this.thumbnailWebp = image.webp
    }
  }
}
</script>

<style lang="scss" scoped>
.itemThumbnail {
  width: 35%;
  margin: 0 5%;

  img {
    width: 100%;
  }

  &-info {
    min-height: 500px;
    margin-bottom: 20px;
  }
  &-list {
    display: flex;
    flex-wrap: wrap;
    > div {
      width: 22%;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
}
</style>
