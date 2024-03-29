<template>
  <div class="news">
    <h1 class="news-title">
      News
    </h1>
    <div
      v-if="loading"
      class="news-skeleton"
    >
      <SkeletonCard
        v-for="i in 8"
        :key="i"
        class="news-skeleton-item"
      />
    </div>
    <div v-else>
      <div class="news-list">
        <Card
          class="news-item"
          v-for="item in list"
          :key="item.id"
          :src="item.thumbnail"
          :webp="item.webp"
          :title="item.title"
          :description="item.content"
          :path="`/news/${item.id}`"
        />
      </div>
      <a-pagination
        class="news-pagination"
        v-model="current"
        :pageSize.sync="pageSize"
        :total="total"
      />
    </div>
    <Breadcrumbs
      :parentPages="[
        { path: '/', name: 'トップ' }
      ]"
      :currentPage="{ name: 'News' }"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { isExpired } from '@/utils/store'

const Breadcrumbs = () => import("~/components/global/Breadcrumbs");
const Card = () => import("@/components/card/Card");
const SkeletonCard = () => import("~/components/skeleton/SkeletonCard");

export default {
  components: {
    Breadcrumbs,
    Card,
    SkeletonCard
  },
  data() {
    return {
      loading: true,
      current: 1,
      pageSize: 12
    }
  },
  computed: {
    ...mapGetters("news", {
      getNewsList: "list"
    }),
    newsList() {
      return this.getNewsList;
    },
    total() {
      return this.newsList.result.length
    },
    list() {
      const begin = this.pageSize * (this.current - 1)
      const end = this.pageSize * this.current
      return this.newsList.result.slice(begin, end)
    }
  },
  created() {
    this.fetch();
  },
  methods: {
    ...mapActions("news", {
      fetchNewsList: "fetchList"
    }),
    async fetch() {
      try {
        this.loading = true
        if (isExpired(this.newsList)) {
          await this.fetchNewsList()
        }
      } catch(e) {
        console.log("error", e)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.news {
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

  &-pagination {
    text-align: center;
  }

  &-list {
    display: flex;
    flex-wrap: wrap;
  }
  &-item {
    width: 23%;
    margin-right: 2%;
    margin-bottom: 10px;
    @include media(sm) {
      width: 46%;
      margin-right: 4%;
      border: 1px solid color(gray, light);
      &:nth-of-type(2n) {
        margin-right: 0px;
        margin-left: 4%;
      }
    }
  }
  &-skeleton {
    display: flex;
    flex-wrap: wrap;
    &-item {
      width: 23%;
      margin-right: 2%;
      margin-bottom: 10px;
      @include media(sm) {
        width: 46%;
        margin-right: 4%;
        border: 1px solid color(gray, light);
        &:nth-of-type(2n) {
          margin-right: 0px;
          margin-left: 4%;
        }
      }
    }
  }
}
@include media(sm) {
  /deep/ .ant-card-body {
    padding: 5px;
  }
}
</style>
