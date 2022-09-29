<template>
  <div class="grid w-full max-w-screen-lg px-2 py-20 mx-auto">
    <div class="flex flex-col md:flex-row gap-5">
      <div class="w-full md:min-w-1/2 overflow-hidden rounded-xl h-min">
        <img :src="data.img" alt="" class="w-full object-contain" />
      </div>
      <div class="md:max-w-1/2">
        <p class="font-bold text-3xl mb-2">
          <span
            class="text-4xl font-bold text-center text-transparent bg-gradient-to-tr from-blue-500 to-primary-500 bg-clip-text"
            >{{ data.name }}</span
          >
        </p>
        <p class="mb-2">some tag line</p>
        <p class="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nulla
          quam, dicta aspernatur neque vel cum autem libero veniam quas nam,
          alias illum fugit debitis?
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/stores/vehicles";
import { useRoute } from "vue-router";
const store = useStore();
const route = useRoute();
const data = ref({});
onBeforeMount(() => {
  data.value = store.vehicles.find((el) => el.slug == route.params.van);
});
</script>

<style lang="scss" scoped></style>
