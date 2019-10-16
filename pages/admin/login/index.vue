<template>
  <div class="adminLogin">
    <h1 class="adminLogin-title">
      Admin Login
    </h1>
    <a-form
      class="adminLogin-form"
      :form="form"
      @submit="handleSubmit"
    >
      <a-form-item
        class="adminLogin-mail"
        label="アカウントID"
      >
        <a-input
          v-decorator="[
            'id',
            {
              rules: [{ required: true, message: '必須項目です' }]
            }
          ]"
        />
      </a-form-item>
      <a-form-item
        class="adminLogin-pass"
        label="パスワード"
      >
        <a-input
          v-decorator="[
            'password',
            {
              rules: [{ required: true, message: '必須項目です' }]
            }
          ]"
          type="password"
        />
      </a-form-item>
      <a-form-item class="adminLogin-submit">
        <a-button
          type="primary"
          html-type="submit"
        >
          ログイン
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  beforeCreate () {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit  (e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          const params = {
            id: values.id,
            pass: values.password
          }
          this.$axios.$post("/api/admin/login", params).then(res => {
            if (res.status === "SUCCESS") {
              console.log("Admin Login")
            } else {
              this.openNotification()
            }
          }).catch(() => {
            this.openNotification()
          })
        }
      });
    },
    openNotification() {
      this.$notification.config({
        placement: "bottomLeft",
      });
      this.$notification["error"]({
        message: "ログインに失敗しました"
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.adminLogin {
  height: 100vh;
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

  &-form {
    width: 70%;
    margin: 0 auto;
  }

  &-mail,
  &-pass {
    margin-bottom: 10px;
  }

  &-create {
    display: inline-block;
    font-size: 14px;
    margin-right:20px;
  }

  &-submit {
    text-align: right;
  }
}
</style>
