<template>
  <div class="grid w-full max-w-screen-lg gap-40 px-2 py-20 mx-auto">
    <VansPreview></VansPreview>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-500 lg:px-10">
      <div
        class="group rounded-md hover:text-accent-500 border-2 border-transparent shadow-lg hover:border-accent-500 flex justify-start hover:scale-[102%] flex-col items-center gap-5 p-5 transition-scale duration-500"
      >
        <i class="fal fa-thumbs-up fa-2x"></i>
        <p class="font-bold">something</p>
        <div class="flex-grow text-sm text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iure
          ullam, optio quibusdam iste exercitationem?
        </div>
      </div>
      <div
        class="group rounded-md hover:text-accent-500 border-2 border-transparent shadow-lg hover:border-accent-500 flex justify-start hover:scale-[102%] flex-col items-center gap-5 p-5 transition-scale duration-500"
      >
        <i class="fal fa-earth-oceania fa-2x"></i>
        <p class="font-bold">something else</p>
        <div class="flex-grow text-sm text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium,
          eveniet? Lorem ipsum dolor sit.
        </div>
      </div>
      <div
        class="group rounded-md hover:text-accent-500 border-2 border-transparent shadow-lg hover:border-accent-500 flex justify-start hover:scale-[102%] flex-col items-center gap-5 p-5 transition-scale duration-500"
      >
        <i class="fal fa-umbrella-beach fa-2x"></i>
        <p class="font-bold">another thing</p>
        <div class="flex-grow text-sm text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium,
          eveniet?
        </div>
      </div>
    </div>
    <div>
      <p class="mb-10 text-center">
        <span
          class="text-4xl font-bold text-center text-transparent bg-gradient-to-tr from-blue-500 to-primary-500 bg-clip-text"
          >about us</span
        >
      </p>
      <div class="grid gap-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          laudantium eum dignissimos quis vero et quae, nostrum asperiores
          soluta autem illo quas molestiae maiores aut in enim tempora ea quos
          nisi porro?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis,
          sapiente dolor commodi quia id dolores harum aliquid incidunt, tempore
          dicta aperiam assumenda voluptas soluta? Magni eaque et, laudantium
          officiis porro repellendus animi aut maiores ut itaque adipisci quo,
          molestiae a.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. Nam unde deserunt hic, odio
          cupiditate ut?
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
