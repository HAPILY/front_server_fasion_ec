<template>
  <div class="about">
    <h1>Concept</h1>
    <div class="about-visual">
      <img
        alt="example"
        src="~/assets/images/demo.png"
        slot="cover"
      >
    </div>
    <div class="about-main">
      <h2>変わらぬ想いでよろこばれる美味しさを</h2>
      <div class="about-main-concept">
        中尾清月堂は、お客様によろこばれる美味しさを大切にしています。
        <br>創業当時から長年愛されるお菓子から、時代にあった新しいお菓子まで、
        <br>そのひとつひとつが今も職人の手で、まごころを込めてつくられています。
      </div>
    </div>
    <Breadcrumbs :currentPage="{ name: 'About' }" />
  </div>
</template>

<script>
import Breadcrumbs from "@/components/global/Breadcrumbs.vue";

export default {
  components: {
    Breadcrumbs
  }
};
</script>

<style lang="scss" scoped>
.about {
  height: 100%;
  position: relative;
  background: color(white, base);
  padding: 24px;
  padding-bottom: 8px;
  min-height: 280px;

  > h1 {
    text-align: center;
    font-family: Garton;
    font-size: 28px;
    margin-bottom: 10px;
  }

  &-visual {
    margin-bottom: 30px;
    text-align: center;

    > img {
      @include media(sm) {
        width: 100%;
      }
    }
  }

  &-main {
    text-align: center;
    > h2 {
      font-size: 22px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    &-concept {
      line-height: 1.4;
    }
  }
}
</style>
