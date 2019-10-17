<template>
  <div class="item">
    <div
      v-if="item && media(['xl', 'lg', 'md'])"
      class="storeItem"
    >
      <ItemThumbnail
        :images="item.images"
      />
      <ItemInfo
        :item="item"
      />
    </div>
    <div
      v-if="item && media(['sm'])"
      class="storeItem"
    >
      <Carousel
        class="storeItem-carousel"
        :per-page="1"
        :autoplay="true"
        :loop="true"
        :autoplay-timeout="10000"
      />
      <ItemInfo
        :item="item"
      />
    </div>
    <Breadcrumbs
      v-if="item"
      :parentPages="[
        { path: '/', name: 'トップ' },
        { path: '/store', name: 'ストア' }
      ]"
      :currentPage="{ name: item.name }"
    />
    <Spiner v-else />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Layout from '@/mixins/layout'

const Breadcrumbs = () => import("~/components/global/Breadcrumbs");
const ItemThumbnail = () => import("~/components/store/ItemThumbnail");
const ItemInfo = () => import("~/components/store/ItemInfo");
const Carousel = () => import("@/components/carousel/Carousel");
const Spiner = () => import("~/components/spiner/Spiner");

export default {
  components: {
    Breadcrumbs,
    ItemThumbnail,
    ItemInfo,
    Carousel,
    Spiner
  },
  mixins: [Layout],
  computed: {
    ...mapGetters("item", {
      getItem: "item"
    }),
    item() {
      if (!this.getItem[this.$route.params.id]) return null
      return this.getItem[this.$route.params.id].result
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    ...mapActions("item", {
      fetchItem: "fetchItem"
    }),
    async fetch() {
      await this.fetchItem({ id: this.$route.params.id })
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  height: 100%;
  position: relative;
  background: color(white, base);
  padding: 24px;
  padding-bottom: 8px;
  min-height: 280px;
}
.storeItem {
  display: flex;
}
</style>
