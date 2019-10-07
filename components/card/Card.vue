<template>
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
    }
  }
};
</script>
