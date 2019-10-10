<template>
  <div class="itemThumbnail">
    <div class="itemThumbnail-info">
      <!-- main -->
      <picture slot="cover">
        <source
          :srcset="images[0].wepb"
          class="img"
          type="image/webp"
        >
        <img
          alt="example"
          :src="images[0].src"
        >
      </picture>
    </div>
    <div class="itemThumbnail-list">
      <!-- list -->
      <div v-for="(image, i) in images" :key="i">
        <picture slot="cover">
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
  }
}
</script>

<style lang="scss" scoped>
.itemThumbnail {
  width: 45%;
  margin-right: 7%;

  img {
    width: 100%;
  }

  &-info {
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
