// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss','@pinia/nuxt'],
  ssr: false,
  app: {
    head: {
      title: "Buy a Campervan",
      // or, instead:
      // titleTemplate: (title) => `Campervan Hire Australia - Wicked Campers - ${title}`,
      meta: [
        {
          name: "description",
          content:
            "Hand crafted campervan fitouts",
        },
      ],
      script: [
        {
          hid: "fontawesome",
          src: "https://kit.fontawesome.com/e3ac7b19f1.js",
          defer: true,
        },
      ],
    }
  }
})
