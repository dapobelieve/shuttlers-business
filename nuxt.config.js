export default {
  ssr: false,
  target: "static",
  head: {
    title: "Shutllers for Business",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/css2?family=Heebo:wght@400;500&display=swap",
      },
    ],
  },
  css: ["@/assets/css/app.scss"],
  plugins: [
    {
      src: "~/plugins/datepicker.js",
      mode: "client",
    },
    {
      src: "~/plugins/vue-select.js",
      mode: "client",
    },
    {
      src: "~/plugins/vue-tel-input.js",
      mode: "client",
    },
    {
      src: "~/plugins/timepicker.js",
    },
    { src: "~plugins/vue-modal.js" },
    {
      src: "~/plugins/vuelidate.js",
      mode: "client",
    },
  ],
  components: [
    "~/components",
    {
      path: "~/components/register",
    },
    {
      path: "~/components/common",
    },
    {
      path: "~/components/forms",
    },
    {
      path: "~/components/modals",
    },
  ],
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // "@nuxtjs/tailwindcss",
  ],
  modules: ["@nuxtjs/tailwindcss"],
  build: {
    loaders: {
      sass: {
        implementation: require("sass"),
      },
      scss: {
        implementation: require("sass"),
      },
    },
    babel: {
      plugins: [["@babel/plugin-proposal-private-property-in-object", { loose: true }]],
    },
  },
};
