// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss','@pinia/nuxt','@nuxtjs/google-fonts','@formkit/nuxt'],
  formkit: {
    configFile: './formkit.config.ts',
  },
  // ssr: false,
  googleFonts: {
    families: {
      Pacifico: true,
      Comfortaa: [400,700]
    },
    prefetch:true
  },
  app: {
    head: {
      title: "Buy a Campervan",
      // or, instead:
      // titleTemplate: (title) => `Campervan Hire Australia - Wicked Campers - ${title}`,
      meta: [
        {
          name: "description",
          content:
            "Ex-rental campervans for sale",
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
