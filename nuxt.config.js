const nodeEnv = `${process.env.NODE_ENV || "development"}`;
const env = require(`./env.${nodeEnv}.js`);
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')

export default {
  mode: "spa",
  env: {
    ...env,
    NODE_ENV: process.env.NODE_ENV
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "ant-design-vue/dist/antd.css",
    "@/assets/fonts/font.css",
    "@/assets/scss/index.scss"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "@/plugins/antd-ui",
    "@/plugins/moment",
    { src: "~/plugins/vue-carousel", ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    ["@nuxtjs/pwa", { icon: false }]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true
  },
  proxy: {
    "/api": "http://localhost:8100/"
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    loaders: {
      scss: {
        data: `@import '~assets/scss/index.scss';`
      }
    },
    parallel: true,
    vendeer: ['moment'],
    plugins: [
      new MomentLocalesPlugin({
        localesToKeep: ['es-us', 'ja']
      })
    ],
    extend(config, ctx) {}
  }
};
