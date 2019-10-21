<template>
  <div class="mypageEdit">
    <Spiner v-if="loading" />
    <div
      v-else
      class="mypageEdit-container"
    >
      <h1 class="mypageEdit-title">
        {{ userProfile.firstName }}様の登録情報
      </h1>
      <div class="mypageEdit-content">
        <h2>会員情報編集</h2>
        <a-form
          class="mypageEdit-form"
          :form="form"
          @submit="handleSubmit"
        >
          <a-form-item
            class="mypageEdit-firstname"
            label="姓"
          >
            <a-input
              v-decorator="[
                'firstname',
                {
                  rules: [{ required: true, message: '必須項目です' }]
                }
              ]"
            />
          </a-form-item>
          <a-form-item
            class="mypageEdit-lastname"
            label="名"
          >
            <a-input
              v-decorator="[
                'lastname',
                {
                  rules: [{ required: true, message: '必須項目です' }]
                }
              ]"
            />
          </a-form-item>
          <a-form-item
            class="mypageEdit-mail"
            label="メールアドレス"
          >
            <a-input
              v-decorator="[
                'email',
                {
                  rules: [
                    { type: 'email', message: 'メールアドレスの形式が間違っています' },
                    { required: true, message: '必須項目です' }
                  ]
                }
              ]"
            />
          </a-form-item>
          <a-form-item
            class="mypageEdit-tel"
            label="電話番号"
          >
            <a-input
              type="number"
              v-decorator="[
                'tel',
                {
                  rules: [{ required: true, message: '必須項目です' }]
                }
              ]"
            />
          </a-form-item>
          <a-form-item
            class="mypageEdit-birthday"
            label="生年月日"
          >
            <a-date-picker
              :format="dateFormat"
              v-decorator="[
                'birthday',
                {
                  rules: [{ required: true, message: '必須項目です' }]
                }
              ]"
            />
          </a-form-item>
          <a-form-item
            class="mypageEdit-zipCode"
            label="郵便番号"
          >
            <a-input
              type="number"
              v-decorator="[
                'zipCode',
                {
                  rules: [{ required: true, message: '必須項目です' }]
                }
              ]"
            />
          </a-form-item>
          <a-form-item
            class="mypageEdit-address"
            label="お届け先住所"
          >
            <a-input
              v-decorator="[
                'address',
                {
                  rules: [{ required: true, message: '必須項目です' }]
                }
              ]"
            />
          </a-form-item>
          <a-form-item class="mypageEdit-submit">
            <a-button
              type="primary"
              html-type="submit"
            >
              更新
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

const Spiner = () => import("~/components/spiner/Spiner");

export default {
  components: {
    Spiner
  },
  data() {
    return {
      form: this.$form.createForm(this, { name: 'coordinated' }),
      loading: true,
      dateFormat: "YYYY-MM-DD"
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
  mounted() {
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
        this.$nextTick(() => {
          this.form.setFieldsValue({
            firstname: this.userProfile.firstName,
            lastname: this.userProfile.lastName,
            email: this.userProfile.mail,
            tel: this.userProfile.tel,
            zipCode: this.userProfile.zipCode,
            address: this.userProfile.address
          })
        })
      }
    },
    handleSubmit  (e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          const params = {
            mail: values.email,
            firstname: values.firstname,
            lastname: values.lastname,
            birthday: values.birthday,
            tel: values.tel,
            zipCode: values.zipCode,
            address: values.address
          }
          this.$axios.$post("/api/user/update", params).then(res => {
            this.openNotification(res)
            setTimeout(() => location.href = "/mypage", 1000);
          }).catch(() => {
            this.openNotification({
              status: "error",
              data: {
                message: "更新に失敗しました"
              }
            })
          })
        }
      });
    },
    openNotification(val) {
      const type = val.status === "SUCCESS" ? "success" : "error";
      this.$notification.config({
        placement: "bottomLeft",
      });
      this.$notification[type]({
        message: val.data.message,
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.mypageEdit {
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
  &-submit {
    margin-top: 10px;
  }
}
</style>