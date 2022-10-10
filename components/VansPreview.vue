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
      <div class="" v-for="van in store.vehicles">
        <p class="mb-5 text-2xl text-gray-600 font-bold text-center">
          {{ van.name }}
        </p>
        <div class="relative">
          <p
            class="absolute font-cursive text-3xl -left-2 top-4 -rotate-3 text-accent-100 after:w-[110%] after:h-full after:bg-accent-500 after:content-[' '] after:absolute after:-left-1 after:top-1 after:-z-10 after:shadow-md"
          >
            {{ van.price }}
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
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/stores/vehicles";
const store = useStore();
</script>

<style lang="scss" scoped></style>
