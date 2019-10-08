<template>
  <nuxt-link :to="path">
    <a-card hoverable>
      <img
        :alt="alt"
        :src="src"
        slot="cover"
      >
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
/deep/ .ant-card-meta-description {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
