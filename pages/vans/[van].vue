<template>
  <div class="grid w-full max-w-screen-lg px-2 py-20 mx-auto">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      <div class="">
        <div
          class="w-full overflow-hidden bg-gray-400 aspect-square rounded-xl"
        >
          <img
            :src="(preview || data.img) + fullsize"
            alt=""
            class="object-cover w-full h-full"
          />
        </div>
        <div class="grid grid-cols-6 gap-1 mt-2 overflow-hidden rounded-lg">
          <img
            v-for="img in data.gallery"
            @click="preview = img"
            :src="img + thumbsize"
            alt=""
            class="object-cover w-full h-16 border cursor-pointer"
          />
          <div
            v-for="placeholder in leftover"
            class="object-cover w-full h-16 bg-gray-200 border"
          ></div>
        </div>
      </div>
      <div class="">
        <p class="mb-5 text-3xl font-bold">
          <span
            class="text-4xl font-bold text-center text-transparent bg-gradient-to-tr from-blue-500 to-primary-500 bg-clip-text"
            >{{ data.name }}</span
          >
        </p>

        <p class="mb-2 text-sm">{{ data.description }}</p>

        <div
          class="mb-10 font-bold text-accent-500"
          :class="{ 'text-gray-400': data.discount }"
        >
          <div
            v-if="!data.sold"
            class="relative mt-2 -mb-1 text-xl font-cursive w-max"
          >
            <span class="text-sm font-light">available for </span>
            <span class="ml-1"> {{ data.price }}</span>
            <div
              v-if="data.discount"
              class="w-[75px] h-[1px] bg-gray-500 absolute -right-1 top-4 rotate-[-4deg]"
            ></div>
          </div>
          <div
            v-if="!data.sold && data.discount"
            class="relative mb-4 text-3xl font-cursive text-accent-500 w-max"
          >
            <span class="text-sm font-light">now </span>
            <span class="ml-1"> {{ data.discount }}</span>
          </div>
          <p v-else class="mb-1 text-2xl font-cursive text-accent-500">Sold!</p>
          <p class="mb-5 text-xs text-gray-700">
            6 month / 10,000km warranty & 6 month rego <br />
            registered in South Australia
          </p>
          <p class="mb-2 text-primary-500">
            Buy now with 50% deposit. Remaining balance due when you collect
            your vehicle.
          </p>
          <p>
            <NuxtLink
              v-if="!data.sold"
              to="/contact"
              class="grid px-5 py-2 text-sm text-gray-100 uppercase rounded-md bg-gradient-to-tr from-accent-500 to-accent-400 hover:from-accent-500 hover:to-accent-500 place-items-center w-max"
              ><span
                ><i class="fa-sharp fa-comment"></i> enquire</span
              ></NuxtLink
            >
          </p>
          <div v-if="!data.sold" class="font-light">
            <p class="mt-5 text-sm" v-if="data.location">
              available in: {{ data.location }}
            </p>
            <p class="mt-5 text-sm" v-else>
              available in:
              <span v-for="city in store.cities">{{ city }}, </span>
            </p>
          </div>
        </div>
        <div class="w-[80%] mx-auto h-px bg-accent-500/50 my-10"></div>

        <div>
          <ul
            class="overflow-hidden text-xs text-gray-700 list-none rounded-lg columns-2"
          >
            <tr class="px-2 py-1" v-for="item in data.specs">
              <td class="py-1">
                <i
                  class="mr-2 fa-sharp text-accent-500 fa-fw"
                  :class="item.icon"
                ></i>
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
const fullsize = "?tr=w-1000,fo-auto";
const thumbsize = "?tr=w-100,h-100,fo-auto";

const leftover = computed(() => {
  let len = store.vehicles.find((el) => el.slug == route.params.van).gallery
    .length;
  if (len < 6) return 6 - len;
  if (len < 12) return 12 - len;
  if (len < 18) return 18 - len;
});
</script>

<style lang="scss" scoped></style>
