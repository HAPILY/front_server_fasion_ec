<template>
  <div>
    <Header :path="path" />
    <div>
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/global/Header.vue'
import Footer from '@/components/global/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  computed: {
    path () {
      return this.$route.path
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
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
</style>
