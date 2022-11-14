<template>
  <div class="w-full py-10 relative mt-20">
    <div class="w-full max-w-screen-lg mx-auto px-2 pb-20">
      <div class="flex gap-4 font-bold mb-3 text-accent">
        <NuxtLink
          v-for="link in links"
          class="hover:underline"
          :to="link.path"
          v-show="route.path != link.path"
          >{{ link.label }}</NuxtLink
        >
        <a class="text-accent-500" href="/wicked-sales-policies-111122.pdf" target="_blank"
          >policies
        </a>
      </div>
      <p class="text-sm">&copy 2022 buyacampervan.com.au</p>
    </div>
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="h-1/2 bg-accent-400 absolute right-0 bottom-0 -z-10 clip w-full"
      ></div>
      <div
        class="h-2/3 bg-accent-300 absolute right-0 bottom-0 -z-20 clip w-full"
      ></div>
      <div
        class="h-3/4 bg-accent-200 absolute right-0 bottom-0 -z-30 clip w-full"
      ></div>
    </div>
    <div class="absolute inset-0 mt-10 -z-10">
      <div
        class="h-1/2 bg-primary-500 absolute right-0 -z-10 bottom-0 clip-flip w-full"
      ></div>
      <div
        class="h-2/3 bg-primary-400 absolute right-0 -z-20 bottom-0 clip-flip w-full"
      ></div>
      <div
        class="h-3/4 bg-primary-200 absolute right-0 -z-30 bottom-0 clip-flip w-full"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();

const links = [
  {
    label: "home",
    path: "/",
  },
  {
    label: "vans",
    path: "/vans",
  },
  {
    label: "contact",
    path: "/contact",
  },
];
</script>

<style lang="postcss" scoped>
.clip {
  clip-path: polygon(0 40%, 100% 20%, 100% 100%, 0 100%);
}
.clip-flip {
  clip-path: polygon(0 10%, 100% 70%, 100% 100%, 0 100%);
}
</style>
