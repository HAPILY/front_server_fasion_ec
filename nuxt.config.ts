export default {
  env: {},
  head: {
    title: "front_server_fasion_ec",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  loading: { color: "#3B8070" },
  css: ["~/assets/css/main.css"],
  build: {},
  buildModules: ["@nuxt/typescript-build"],
  modules: [
    "@nuxtjs/axios",
  ],
  axios: {}
}
