<template>
  <div>
    <p
      class="text-center mb-10 bg-gradient-to-tr from-blue-500 to-primary-400 bg-clip-text"
    >
      <span class="text-4xl font-bold text-center text-transparent"
        >our campervans</span
      >
    </p>
    <div class="grid grid-cols-1 gap-10 md:grid-cols-2">
      <div class="h-full" v-for="van in store.vehicles">
        <p class="mb-5 text-2xl text-gray-600 font-bold text-center">
          {{ van.name }}
        </p>
        <div class="relative">
          <p
            class="absolute font-cursive text-3xl -left-2 top-4 -rotate-3 text-accent-100 after:w-[110%] after:h-full after:bg-accent-500 after:content-[' '] after:absolute after:-left-1 after:top-1 after:-z-10 after:shadow-md after:w-[120%]"
          >
            <span v-if="!van.sold">{{ van.price }}</span>
            <span v-else>sold</span>
          </p>
          <img
            :src="van.img + '?tr=w-1200'"
            alt=""
            class="mb-5 rounded-md shadow-xl shadow-accent-500/20 md:h-[300px] w-full object-cover"
          />
        </div>

        <p class="mb-5 text-sm text-left">
          {{ van.description }}
        </p>

        <NuxtLink class="text-accent-500 group" :to="'/vans/' + van.slug">
          <span
            class="bg-accent text-white py-1 px-4 rounded-md flex items-center w-max hover:from-accent-500 hover:to-accent-500 bg-gradient-to-tr from-accent-500 to-accent-400"
          >
            <i class="fa-sharp fa-image mr-2"></i>more info
            <i
              class="duration-200 fal fa-arrow-right group-hover:translate-x-2 ml-1 transition-translate"
            ></i>
          </span>
        </NuxtLink>
        <div class="flex flex-wrap gap-x-1 my-2 text-xs" v-if="!van.location">
          Avaialble in:
          <span class="w-max" v-for="city in store.cities">
            {{ city }} <span class="text-accent-500">/</span></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/stores/vehicles";
const store = useStore();
</script>

<style lang="scss" scoped></style>
