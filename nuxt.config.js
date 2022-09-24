export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "termii-dashboard",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@assets/reset.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],
  // router: {
  //   middleware: ["auth"],
  // },

  // Modules: https://go.nuxtjs.dev/config-modules
  // modules: [],

  //  router: {
  //    middleware: ["auth"],
  // },

  modules: [
    //   // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyAVbl7mSkddlRdiZ7Od0zt8RuYTZJDCCsw",
          authDomain: "termii-email-go-main.firebaseapp.com",
          projectId: "termii-email-go-main",
          storageBucket: "termii-email-go-main.appspot.com",
          messagingSenderId: "650938755046",
          appId: "1:650938755046:web:356f2194a8991b43199827",
        },
        services: {
          auth: {
            persistence: "local",
            initialize: {
              onAuthStateChangedAction: "onAuthStateChangedAction",
              subscribeManually: false,
            },
            ssr: false,
          },
        },
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // module.exports = {
  //   devServer: {
  //     proxy: {
  //       "^/api": {
  //         target: "http://localhost:9090",
  //         changeOrigin: true,
  //         logLevel: "debug",
  //         pathRewrite: { "^/api": "/" }
  //       }
  //     }
  //   }
  // }
};
