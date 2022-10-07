<template>
  <div class="grid w-full max-w-screen-lg gap-40 px-2 py-20 mx-auto">
    <VansPreview></VansPreview>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-500 lg:px-10">
      <div
        class="group rounded-md hover:text-accent-500 border-2 border-transparent shadow-lg hover:border-accent-500 flex justify-start hover:scale-[102%] flex-col items-center gap-5 p-5 transition-scale duration-500"
      >
        <i class="fal fa-thumbs-up fa-2x"></i>
        <p class="font-bold">Quality Conversions</p>
        <div class="flex-grow text-sm text-center">
          Hand crafted campervan fitouts, built brand new for your next
          adventure.
        </div>
      </div>
      <div
        class="group rounded-md hover:text-accent-500 border-2 border-transparent shadow-lg hover:border-accent-500 flex justify-start hover:scale-[102%] flex-col items-center gap-5 p-5 transition-scale duration-500"
      >
        <i class="fal fa-earth-oceania fa-2x"></i>
        <p class="font-bold">Built Locally</p>
        <div class="flex-grow text-sm text-center">
          Our Brisbane team has years of experience in campervan conversions
        </div>
      </div>
      <div
        class="group rounded-md hover:text-accent-500 border-2 border-transparent shadow-lg hover:border-accent-500 flex justify-start hover:scale-[102%] flex-col items-center gap-5 p-5 transition-scale duration-500"
      >
        <i class="fal fa-umbrella-beach fa-2x"></i>
        <p class="font-bold">Ready to Go</p>
        <div class="flex-grow text-sm text-center">
          Our campervans are recently converted, ready to roll with 6 months
          rego.
        </div>
      </div>
    </div>
    <div>
      <p class="mb-10 text-center">
        <span
          class="text-4xl font-bold text-center text-transparent bg-gradient-to-tr from-blue-500 to-primary-500 bg-clip-text"
          >about</span
        >
      </p>
      <div class="grid gap-2">
        <p>
          We're a small Brisbane team with years of experience in campervan
          conversions. Our campervan fitouts are hand built, and are all brand
          new and ready for your dream road trip. Our campers are converted from
          pre-loved Suzuki APVs - spacious and reliable vans with old-school
          charm.
        </p>
        <p>
          If you have any questions about our campers, please
          <NuxtLink to="/contact" class="text-accent">get in touch</NuxtLink>
          and we'll be happy to assist.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/stores/vehicles";
const store = useStore();
</script>

<style lang="scss" scoped></style>
