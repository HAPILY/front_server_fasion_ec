<template>
  <div class="mypage">
    <Spiner v-if="loading" />
    <div
      v-else
      class="mypage-container"
    >
      <h1 class="mypage-title">
        {{ userProfile.firstName }}様の登録情報
      </h1>
      <div class="mypage-content">
        <h2>会員情報</h2>
        <div class="mypage-detail">
          <div class="mypage-label">
            名前
          </div>
          <div class="mypage-info">
            {{ userProfile.firstName }}{{ userProfile.lastName }}
          </div>
          <div class="mypage-label">
            誕生日
          </div>
          <div class="mypage-info">
            {{ userProfile.birthday }}
          </div>
          <div class="mypage-label">
            メールアドレス
          </div>
          <div class="mypage-info">
            {{ userProfile.mail }}
          </div>
          <div class="mypage-label">
            電話番号
          </div>
          <div class="mypage-info">
            {{ userProfile.tel }}
          </div>
          <div class="mypage-label">
            お届け先住所
          </div>
          <div class="mypage-info">
            〒{{ userProfile.zipCode }}
            <br>
            {{ userProfile.address }}
          </div>
        </div>
        <nuxt-link to="/mypage/edit">
          <a-button
            class="mypage-edit"
            type="primary"
          >
            変更
          </a-button>
        </nuxt-link>
      </div>
      <Breadcrumbs
        :parentPages="[
          { path: '/', name: 'トップ' }
        ]"
        :currentPage="{ name: 'マイページ' }"
      />
    </div>
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
  data() {
    return {
      loading: true
    }
  },
  computed: {
    ...mapGetters("user", {
      getProfile: "user"
    }),
    userProfile() {
      return this.getProfile.result
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    ...mapActions("user", {
      fetchUserProfile: "fetchUserProfile"
    }),
    async fetch() {
      try {
        this.loading = true
        await this.fetchUserProfile()
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
.mypage {
  height: 100%;
  position: relative;
  background: color(white, base);
  padding: 24px;
  padding-bottom: 8px;
  min-height: 280px;

  &-title {
    font-size: 22px;
    margin-bottom: 28px;
  }

  &-content {
    border: 1px solid color(gray, base);
    border-radius: 8px;
    padding: 32px;
    > h2 {
      font-size: 18px;
      padding-bottom: 10px;
      margin-bottom: 20px;
      border-bottom: 1px solid color(gray, dark);
    }
  }

  &-detail {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  &-label {
    display: inline-block;
    width: 15%;
    margin-bottom: 10px;
    @include media(sm) {
      width: 100%;
      font-weight: bold;
      margin-bottom: 5px;
    }
  }
  &-info {
    display: inline-block;
    width: 85%;
    margin-bottom: 10px;
    @include media(sm) {
      width: 100%;
      margin-bottom: 14px;
    }
  }
}
</style>
