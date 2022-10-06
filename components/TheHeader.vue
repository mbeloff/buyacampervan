<template>
  <div class="bg-white shadow-lg shadow-black/5 z-50">
    <div class="relative w-full max-w-screen-lg mx-auto py-4">
      <div class="w-full flex flex-grow z-50 bg-white">
        <NuxtLink to="/" class="px-6 mx-auto flex flex-col">
          <img src="~/assets/vanicon.png" alt="" class="h-14 object-contain" />
          <p class="-mt-3 font-bold text-gray-600">
            <span class="text-accent-500">buy</span>a<span
              class="text-transparent bg-gradient-to-tr from-blue-500 to-primary-500 bg-clip-text"
              >campervan</span
            >
          </p>
        </NuxtLink>
        <!-- menu -->

        <div
          class="flex flex-col md:flex-row md:relative text-gray-800 font-bold text-center absolute z-40 flex-1 w-full top-full duration-200 transition-transform grow"
          :class="{
            '-translate-x-full md:translate-x-0': !menuOpen,
            'duration-200 transition-transform -z-10': width <= 768,
          }"
        >
          <div
            class="flex flex-col md:flex-row bg-white w-full h-full items-center grow py-6 md:py-0 gap-y-4 text-sm"
          >
            <NuxtLink
              to="/vans"
              class="py-2 px-4 hover:text-accent-500 hover:scale-105 transition-scale duration-200"
            >
              vans for sale
            </NuxtLink>
          </div>

          <div
            class="flex gap-2 font-bold md:w-64 md:h-8 md:pb-0 md:shadow-none my-auto bg-white justify-center shadow-xl shadow-black/20 pb-4"
          >
            <NuxtLink
              to="/contact"
              class="rounded-md bg-gradient-to-tr from-accent-500 to-accent-400 px-5 py-2 text-sm text-gray-100 uppercase hover:from-accent-500 hover:to-accent-500 grid place-items-center"
            >
              <span><i class="fa-sharp fa-comment"></i> Contact</span>
            </NuxtLink>
          </div>
        </div>

        <div
          @click="menuOpen = !menuOpen"
          class="absolute right-4 top-0 h-full grid md:hidden place-items-center"
        >
          <i
            v-if="!menuOpen"
            class="far fa-bars fa-2x text-gray-700 self-center mr-2"
          ></i>
          <i
            v-if="menuOpen"
            class="far fa-times fa-2x text-gray-700 self-center mr-2"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const menuOpen = ref(false);
const width = ref();

watch(width, (w, prev) => {
  if (w >= 768) {
    menuOpen.value = true;
  }
  if (prev > 768 && w <= 768) {
    menuOpen.value = false;
  }
});

if (process.client) {
  width.value = window.innerWidth;
  const onResize = () => {
    width.value = window.innerWidth;
  };
  window.addEventListener("resize", onResize);
}
</script>

<style lang="postcss" scoped></style>
