<template>
  <div>
    <div class="grid grid-cols-4 max-w-screen-lg gap-0 mx-auto relative">
      <img
        class="h-full w-full object-cover"
        :src="store.vehicles[0].gallery[0] + '?tr=w-550'"
        alt=""
      />
      <img
        class="h-full w-full object-cover"
        :src="store.vehicles[1].gallery[1] + '?tr=w-550'"
        alt=""
      />
      <img
        class="h-full w-full object-cover"
        :src="store.vehicles[1].gallery[6] + '?tr=w-550'"
        alt=""
      />
      <img
        class="h-full w-full object-cover"
        :src="store.vehicles[0].gallery[2] + '?tr=w-550'"
        alt=""
      />
      <div
        class="absolute w-full h-[20%] bottom-0 left-0 bg-gradient-to-t from-white/50 to-transparent"
      ></div>
    </div>
    <div
      class="grid w-full max-w-screen-lg gap-20 md:gap-40 px-2 py-10 mx-auto"
    >
      <div>
        <p class="mb-10 text-center text-3xl md:text-6xl">
          <span
            class="font-bold text-center text-transparent bg-gradient-to-tr from-accent-500 to-accent-300 bg-clip-text"
            >buy</span
          >
          <span
            class="font-bold text-center text-transparent bg-gray-500 bg-clip-text"
            >a</span
          >
          <span
            class="font-bold text-center text-transparent bg-gradient-to-tr from-blue-500 to-primary-400 bg-clip-text"
            >campervan</span
          >
        </p>
        <div class="grid gap-2">
          <p>
            Our team has decades of experience in campervan conversions. Our
            campervan fitouts are hand built, and are all ready for your dream
            road trip. Our campers are converted from pre-loved Suzuki APVs -
            spacious and reliable vans with old-school charm. All vans are sold
            with 6 months registrations (registered in South Australia or
            Queensland) and come with a
            <a
              class="text-accent-500"
              href="/wicked-sales-policies-111122.pdf"
              target="_blank"
              >warranty and a buyback
            </a>
            offer.
          </p>
          <p>
            If you have any questions about our campers, please
            <NuxtLink to="/contact" class="text-accent">get in touch</NuxtLink>
            and we'll be happy to assist.
          </p>
        </div>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-500 lg:px-10"
      >
        <div
          class="group rounded-md hover:text-accent-500 border-2 border-transparent shadow-lg hover:border-accent-500 flex justify-start hover:scale-[102%] flex-col items-center gap-5 p-5 transition-scale duration-500"
        >
          <i class="fal fa-thumbs-up fa-2x"></i>
          <p class="font-bold">Quality Conversions</p>
          <div class="flex-grow text-sm text-center">
            Hand crafted campervan fitouts, built for your next adventure.
          </div>
        </div>
        <div
          class="group rounded-md hover:text-accent-500 border-2 border-transparent shadow-lg hover:border-accent-500 flex justify-start hover:scale-[102%] flex-col items-center gap-5 p-5 transition-scale duration-500"
        >
          <i class="fal fa-earth-oceania fa-2x"></i>
          <p class="font-bold">Built Locally</p>
          <div class="flex-grow text-sm text-center">
            Our team has years of experience in campervan conversions, with
            campers available in locations all around Australia
          </div>
        </div>
        <div
          class="group rounded-md hover:text-accent-500 border-2 border-transparent shadow-lg hover:border-accent-500 flex justify-start hover:scale-[102%] flex-col items-center gap-5 p-5 transition-scale duration-500"
        >
          <i class="fal fa-umbrella-beach fa-2x"></i>
          <p class="font-bold">Ready to Go</p>
          <div class="flex-grow text-sm text-center">
            Our campervans come with a warranty, buyback offer and 6 months
            rego.
          </div>
        </div>
      </div>
      <VansPreview></VansPreview>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/stores/vehicles";
const store = useStore();
</script>

<style lang="scss" scoped></style>
