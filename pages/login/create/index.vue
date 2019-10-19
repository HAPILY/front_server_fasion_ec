<template>
  <div class="createAccount">
    <h1 class="createAccount-title">
      Create Account
    </h1>
    <a-form
      class="createAccount-form"
      :form="form"
      @submit="handleSubmit"
    >
      <a-form-item
        class="createAccount-mail"
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
        class="createAccount-firstname"
        label="姓"
      >
        <a-input
          v-decorator="[
            'firstname',
            {
              rules: [
                { required: true, message: '必須項目です' }
              ]
            }
          ]"
        />
      </a-form-item>
      <a-form-item
        class="createAccount-lastname"
        label="名"
      >
        <a-input
          v-decorator="[
            'lastname',
            {
              rules: [
                { required: true, message: '必須項目です' }
              ]
            }
          ]"
        />
      </a-form-item>
      <a-form-item
        class="createAccount-pass"
        label="パスワード"
      >
        <a-input
          v-decorator="[
            'password',
            {
              rules: [
                { required: true, message: '必須項目です' },
                { min: 4, message: 'パスワードは4文字以上です' },
                { max: 12, message: 'パスワードは12文字以下です' }
              ]
            }
          ]"
          type="password"
        />
      </a-form-item>
      <a-form-item
        class="createAccount-birthday"
        label="生年月日"
      >
        <a-date-picker
          v-decorator="[
            'birthday',
            {
              rules: [
                { required: true, message: '必須項目です' }
              ]
            }
          ]"
        />
      </a-form-item>
      <a-form-item class="createAccount-submit">
        <a-button
          type="primary"
          html-type="submit"
        >
          アカウント作成
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
            mail: values.email,
            firstname: values.firstname,
            lastname: values.lastname,
            pass: values.password,
            birthday: values.birthday
          }
          this.$axios.$post("/api/user/create", params).then(res => {
            if (res.status === "SUCCESS") {
              location.href = "/login"
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
        message: "アカウント作成に失敗しました"
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.createAccount {
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
  &-name,
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
