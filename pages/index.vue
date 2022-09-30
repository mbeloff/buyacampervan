<template>
  <div class="grid w-full max-w-screen-lg gap-40 px-2 py-20 mx-auto">
    <div>
      <p class="text-center mb-10">
        <span
          class="text-4xl font-bold text-center text-transparent bg-gradient-to-tr from-blue-500 to-primary-500 bg-clip-text"
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
            laboriosam doloremque maxime eius sequi. Reprehenderit facere culpa
            quod ipsa asperiores dolorem voluptatibus a?
          </p>
          <NuxtLink class="text-accent-500 group" :to="'/vans/' + van.slug"
            ><i class="fas fa-info-circle"></i> more info
            <i
              class="duration-200 fal fa-arrow-right group-hover:translate-x-2 transition-translate"
            ></i
          ></NuxtLink>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-500 lg:px-10">
      <div
        class="group rounded-md hover:text-accent-500 border-2 border-transparent shadow-lg hover:border-accent-500 flex justify-start hover:scale-[102%] flex-col items-center gap-5 p-5 transition-scale duration-500"
      >
        <i class="fal fa-thumbs-up fa-2x"></i>
        <p class="font-bold">something</p>
        <div class="flex-grow text-sm text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium,
          eveniet?
        </div>
      </div>
      <div
        class="group rounded-md hover:text-accent-500 border-2 border-transparent shadow-lg hover:border-accent-500 flex justify-start hover:scale-[102%] flex-col items-center gap-5 p-5 transition-scale duration-500"
      >
        <i class="fal fa-earth-oceania fa-2x"></i>
        <p class="font-bold">something else</p>
        <div class="flex-grow text-sm text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium,
          eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Iusto, quidem!
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
