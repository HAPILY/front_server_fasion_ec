const nodeEnv = `${process.env.NODE_ENV || "development"}`;
const env = require(`./env.${nodeEnv}.js`);

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
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
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
    "@/static/assets/fonts/font.css",
    "@/assets/scss/index.scss"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "@/plugins/antd-ui",
    "@/plugins/dayjs",
    "@/plugins/axios",
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
    '@nuxtjs/component-cache',
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
  router: {
    middleware: ['auth']
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
    optimization: {
      splitChunks: {
        name: 'vender',
        chunks: 'initial'
      }
    },
    html: {
      minify: {
        minifyCSS: true,
        minifyJS: true
      }
    }
    // extend(config, ctx) {}
  }
};
