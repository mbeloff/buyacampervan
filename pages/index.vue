<template>
  <div>
    <div class="relative grid max-w-screen-lg grid-cols-4 gap-0 mx-auto">
      <img
        class="object-cover w-full h-full"
        :src="'https://ik.imagekit.io/y3ayiqneqlr/buyacampervan/beach-comb/01b.jpeg?tr=w-550'"
        alt=""
      />
      <img
        class="object-cover w-full h-full"
        :src="'https://ik.imagekit.io/y3ayiqneqlr/buyacampervan/beach-comb/02.jpeg?tr=w-550'"
        alt=""
      />
      <img
        class="object-cover w-full h-full"
        :src="'https://ik.imagekit.io/y3ayiqneqlr/buyacampervan/beach-comb/07.jpeg?tr=w-550'"
        alt=""
      />
      <img
        class="object-cover w-full h-full"
        :src="'https://ik.imagekit.io/y3ayiqneqlr/buyacampervan/mystery-machine-regius/6.jpg?tr=w-550'"
        alt=""
      />
      <div
        class="absolute w-full h-[20%] bottom-0 left-0 bg-gradient-to-t from-white/50 to-transparent"
      ></div>
    </div>
    <div
      class="max-w-screen-lg py-2 mx-auto font-bold text-center text-white bg-red-500"
    >
      {{ store.special }}
    </div>
    <div
      class="grid w-full max-w-screen-lg gap-20 px-2 py-10 mx-auto md:gap-40"
    >
      <div>
        <p class="text-3xl text-center md:text-6xl">
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
        <p class="mb-10 text-lg font-bold text-center text-accent-500">
          - Buyback Guarantee -
        </p>
        <div class="grid gap-2">
          <p>
            Buy the perfect campervan for your next Australian adventure! We
            offer ex-rental campervans, ideal for backpackers or tourists who
            want to explore the country at their own pace.
          </p>
          <p>
            Our campervans are perfect for those who love the freedom of the
            open road, as they come with everything you need to hit the highway
            and start exploring. They are equipped with a dining/lounge area,
            double bed and kitchenette complete with gas-cooker, cutlery and
            cookware.
          </p>
          <p>
            All of our campervans are available in cities around Australia and
            come with 6 months registration (registered in South Australia). We
            also offer a
            <a
              class="text-accent-500"
              href="/wicked-sales-policies-111122.pdf"
              target="_blank"
              >warranty and a buyback offer </a
            >, which means that you can sell your campervan back to us at a fair
            price at the end of your journey.
          </p>
          <p>
            So whether you're planning a short road trip or a longer adventure,
            our campervans are the perfect choice for exploring Australia.
            Browse our range today and start planning your next adventure!
          </p>
          <p>
            If you have any questions about our campers, please
            <NuxtLink to="/contact" class="text-accent">get in touch</NuxtLink>
            and we'll be happy to assist.
          </p>
        </div>
      </div>
      <div
        class="grid grid-cols-1 gap-10 text-gray-500 md:grid-cols-3 lg:px-10"
      >
        <div
          class="group rounded-md hover:text-accent-500 border-2 border-transparent shadow-lg hover:border-accent-500 flex justify-start hover:scale-[102%] flex-col items-center gap-5 p-5 transition-scale duration-500"
        >
          <i class="fal fa-thumbs-up fa-2x"></i>
          <p class="font-bold">Quality Conversions</p>
          <div class="flex-grow text-sm text-center">
            Hand crafted campervan fitouts, ready for your next adventure.
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
            registration.
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
