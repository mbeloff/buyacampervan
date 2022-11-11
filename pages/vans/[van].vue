<template>
  <div class="grid w-full max-w-screen-lg px-2 py-20 mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div class="">
        <div
          class="w-full aspect-square rounded-xl overflow-hidden bg-gray-400"
        >
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
          <div
            v-for="placeholder in leftover"
            class="w-full h-16 object-cover border bg-gray-200"
          ></div>
        </div>
      </div>
      <div class="">
        <p class="font-bold text-3xl mb-5">
          <span
            class="text-4xl font-bold text-center text-transparent bg-gradient-to-tr from-blue-500 to-primary-500 bg-clip-text"
            >{{ data.name }}</span
          >
        </p>

        <p class="text-sm mb-2">{{ data.description }}</p>
        <div class="mb-10 font-bold">
          <p class="font-cursive text-2xl text-accent-500 mb-1">
            <span class="font-light text-sm text-">available for</span>
            {{ data.price }}
          </p>
          <p class="text-xs mb-5 text-gray-700">
            3 month / 5,000km warranty & 6 month rego
          </p>
          <p>
            <NuxtLink
              to="/contact"
              class="rounded-md bg-gradient-to-tr from-accent-500 to-accent-400 px-5 py-2 text-sm text-gray-100 uppercase hover:from-accent-500 hover:to-accent-500 grid place-items-center w-max"
              ><span
                ><i class="fa-sharp fa-comment"></i> enquire</span
              ></NuxtLink
            >
          </p>
        </div>
        <div class="w-[80%] mx-auto h-px bg-accent-500/50 my-10"></div>

        <div>
          <ul
            class="list-none text-xs text-gray-700 rounded-lg overflow-hidden columns-2"
          >
            <tr class="py-1 px-2" v-for="item in data.specs">
              <td class="py-1">
<i
                class="fa-sharp text-accent-500 mr-2 fa-fw"
                :class="item.icon"
              ></i
              >
              </td>
              <td class="py-1">
{{ item.text }}
              </td>
              
            </tr>
          </ul>
        </div>
      </div>
    </div>
    <Buyback v-if="data.buyback"></Buyback>
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

const leftover = computed(() => {
  let len = store.vehicles.find((el) => el.slug == route.params.van).gallery
    .length;
  if (len < 6) return 6 - len;
  if (len < 12) return 12 - len;
  if (len < 18) return 18 - len;
});
</script>

<style lang="scss" scoped></style>
