<template>
  <div class="grid w-full max-w-screen-lg px-2 py-20 mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div class="">
        <div class="w-full aspect-video rounded-xl overflow-hidden bg-gray-400">
          <img
            :src="(preview || data.img) + fullsize"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>
        <div class="grid grid-cols-6 mt-2 rounded-lg overflow-hidden gap-1">
          <img
            v-for="img in data.gallery"
            @click="preview = img"
            :src="img + thumbsize"
            alt=""
            class="w-full h-16 object-cover"
          />
        </div>
      </div>
      <div class="">
        <p class="font-bold text-3xl mb-2">
          <span
            class="text-4xl font-bold text-center text-transparent bg-gradient-to-tr from-blue-500 to-primary-500 bg-clip-text"
            >{{ data.name }}</span
          >
        </p>
        <p class="mb-2">some tag line</p>
        <p class="text-sm mb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nulla
          quam, dicta aspernatur neque vel cum autem libero veniam quas nam,
          alias illum fugit debitis?
        </p>
        <div
          class="grid grid-cols-1 md:grid-cols-3 text-sm gap-y-4 my-10 ml-4 md:ml-0"
        >
          <div v-for="item in data.features" class="flex items-center gap-2">
            <i class="fa-sharp text-accent-500" :class="item.icon"></i>
            <span>{{ item.text }}</span>
          </div>
        </div>
        <div class="w-[80%] mx-auto h-px bg-accent-500/50 my-10"></div>
        <div>
          <ul
            class="list-none text-xs text-gray-700 rounded-lg overflow-hidden columns-2"
          >
            <li class="py-1 px-2" v-for="item in data.specs">
              {{ item }}
            </li>
          </ul>
        </div>
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
watchEffect(() => {
  data.value = store.vehicles.find((el) => el.slug == route.params.van);
});
const preview = ref(null);
const fullsize = "?tr=w-1200";
const thumbsize = "?tr=w-100";
</script>

<style lang="scss" scoped></style>
