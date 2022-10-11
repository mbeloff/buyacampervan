import VueGtag from "vue-gtag";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    VueGtag,
    {
      config: {
        id: "G-WPFV6VTTHJ",
      },
    },
    nuxtApp.$router
  );
});
