<template>
  <div class="contact">
    <h1 class="contact-title">Contact</h1>
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item
        class="contact-name"
        label="名前"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 15 }"
      >
        <a-input
          v-decorator="[
            '名前',
            { rules: [{ required: true, message: '必須項目です' }] }
          ]"
        />
      </a-form-item>
      <a-form-item
        class="contact-mail"
        label="メールアドレス"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 15 }"
      >
        <a-input
          v-decorator="[
            'メールアドレス',
            {
              rules: [{
                type: 'email', message: 'メールアドレスの形式が間違っています',
              }, {
                required: true, message: '必須項目です',
              }]
            }
          ]"
        />
      </a-form-item>
      <a-form-item
        class="contact-detail"
        label="お問い合わせ内容"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 15 }"
      >
        <a-textarea
          v-decorator="[
            'お問い合わせ内容',
            { rules: [{ required: true, message: '必須項目です' }] }
          ]"
          :autosize="{ minRows: 4, maxRows: 10 }"
        />
      </a-form-item>
      <a-form-item class="contact-submit-pc" :wrapper-col="{ span: 15, offset: 5 }">
        <a-button type="primary" html-type="submit">送信</a-button>
      </a-form-item>
      <a-form-item class="contact-submit-sp" :wrapper-col="{ span: 15 }">
        <a-button type="primary" html-type="submit">送信</a-button>
      </a-form-item>
    </a-form>
    <Breadcrumbs :parentPages="[{ path: '/', name: 'トップ' }]" :currentPage="{ name: 'お問い合わせ' }" />
  </div>
</template>

<script>
import Breadcrumbs from "@/components/global/Breadcrumbs.vue";

export default {
  components: {
    Breadcrumbs
  },
  data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.contact {
  height: 100%;
  position: relative;
  background: color(white, base);
  padding: 24px;
  padding-bottom: 8px;
  min-height: 280px;

  &-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 28px;
    text-align: center;
    font-family: Garton;
  }

  &-name,
  &-mail,
  &-detail {
    margin-bottom: 10px;
  }

  &-submit {
    &-pc {
      text-align: right;
      @include media(sm) {
        display: none;
      }
    }
    &-sp {
      text-align: right;
      @include media(xl, lg, md) {
        display: none;
      }
    }
  }
}
</style>
