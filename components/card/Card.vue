<template>
  <nuxt-link :to="path">
    <a-card hoverable>
      <picture slot="cover">
        <source
          srcset="~/assets/images/A.webp"
          class="img"
          type="image/webp"
        >
        <img
          class="card-image"
          src="~/assets/images/A.png"
          alt="img"
        >
      </picture>
      <a-card-meta
        :title="title"
        :description="description"
      />
    </a-card>
  </nuxt-link>
</template>

<script>
export default {
  name: "Card",
  props: {
    alt: {
      type: String,
      default: ""
    },
    src: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ""
    },
    path: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.card-image {
  width: 100%;
}
/deep/ .ant-card-meta-description {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
