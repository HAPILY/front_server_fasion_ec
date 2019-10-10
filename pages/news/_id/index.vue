<template>
  <div class="newsItem">
    <h1 class="newsItem-title">
      News
    </h1>
    <div v-if="item">
      <div class="newsItem-thumbnail">
        <!-- サムネ -->
        <picture>
          <source
            :srcset="item.webp"
            class="img"
            type="image/webp"
          >
          <img
            alt="example"
            :src="item.thumbnail"
          >
        </picture>
      </div>
      <div
        class="newsItem-content"
        v-html="item.content"
      />
    </div>
    <Breadcrumbs
      v-if="item"
      :parentPages="[
        { path: '/', name: 'トップ' },
        { path: '/news', name: 'News' }
      ]"
      :currentPage="{ name: item.title }"
    />
    <Spiner v-else />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

const Breadcrumbs = () => import("~/components/global/Breadcrumbs");
const Spiner = () => import("~/components/spiner/Spiner");

export default {
  components: {
    Breadcrumbs,
    Spiner
  },
  computed: {
    ...mapGetters("news", {
      getItem: "item"
    }),
    item() {
      return this.getItem.result
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    ...mapActions("news", {
      fetchItem: "fetchItem"
    }),
    async fetch() {
      await this.fetchItem({ id: this.$route.params.id })
    }
  }
}
</script>

<style lang="scss" scoped>
.newsItem {
  height: 100%;
  position: relative;
  background: color(white, base);
  padding: 24px;
  padding-bottom: 8px;
  min-height: 280px;

  &-title {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    font-family: Garton;
    margin-bottom: 28px;
  }

  &-thumbnail {
    text-align: center;
    width: 30%;
    margin: 0 auto;
    margin-bottom: 30px;
    img {
      width: 100%;
    }
  }
  &-content {
    width: 60%;
    margin: 0 auto;
    line-height: 1.4;
    margin-bottom: 20px;
  }
}
</style>
