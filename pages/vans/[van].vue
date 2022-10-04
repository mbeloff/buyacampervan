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
        <div class="grid grid-cols-6 mt-2 gap-1 rounded-lg overflow-hidden">
          <img
            v-for="img in data.gallery"
            @click="preview = img"
            :src="img + thumbsize"
            alt=""
            class="w-full h-16 object-cover border cursor-pointer"
          />
        </div>
      </div>
      <div class="">
        <p class="font-bold text-3xl mb-5">
          <span
            class="text-4xl font-bold text-center text-transparent bg-gradient-to-tr from-blue-500 to-primary-500 bg-clip-text"
            >{{ data.name }}</span
          >
        </p>
        <!-- <p class="mb-2">tag line or short descriptor</p> -->
        <p class="text-sm mb-2">{{ data.description }}</p>
        <div class="w-[80%] mx-auto h-px bg-accent-500/50 my-10"></div>
        <div>
          <ul
            class="list-none text-xs text-gray-700 rounded-lg overflow-hidden columns-2"
          >
            <li class="py-1 px-2" v-for="item in data.specs">
              <i class="fa-sharp text-accent-500 mr-2 fa-fw" :class="item.icon"></i>{{ item.text }}
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
