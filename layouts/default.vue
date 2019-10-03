<template>
  <div>
    <Header :path="path" />
    <a-layout class="layout">
      <a-layout-content class="layout-content">
        <nuxt />
      </a-layout-content>
    </a-layout>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/global/Header.vue";
import Footer from "@/components/global/Footer.vue";

export default {
  components: {
    Header,
    Footer
  },
  computed: {
    path() {
      return this.$route.path;
    }
  }
};
</script>

<style lang="scss" scoped>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.layout {
  height: 100vh;
  padding-top: 64px;
}
.layout-content {
  padding: 50px;
  @include media(sm) {
    padding: 20px;
  }
}
</style>
