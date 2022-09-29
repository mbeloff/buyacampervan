<template>
  <div class="grid items-start content-start gap-2">
    <div
      class="flex flex-col rounded transition-colors"
      v-for="item in filtered"
      :key="item.question"
      :class="{ 'bg-gray-100': item.open }"
    >
      <button
        class="flex justify-items-between items-center p-2 text-left hover:text-teal-500"
        :class="{ 'text-teal-500': item.open }"
        @click="item.open = !item.open"
      >
        <p class="grow font-bold">{{ item.question }}</p>
        <i
          class="fa-sharp fa-chevron-down transition-transform duration-500"
          :class="{ 'rotate-180': item.open }"
        ></i>
      </button>
      <smooth-reflow>
        <div
          v-show="item.open"
          class="transition-opacity duration-1000 p-2 grid gap-1"
          :class="{ 'opacity-0': !item.open, 'opacity-100': item.open }"
        >
          <p
            v-for="paragraph in item.answer"
            class="transition-opacity duration-1000"
            :class="{ 'opacity-0': !item.open, 'opacity-100': item.open }"
          >
            {{ paragraph }}
          </p>
        </div>
      </smooth-reflow>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tags: {
    type: Array,
  },
  limit: {
    type: Number,
    default: null,
  },
});

const filtered = computed(() => {
  let arr = questions.value;
  if (props.limit) {
    arr = arr.slice(0, props.limit);
  }

  return arr;
});

const questions = ref([
  {
    question: "Opening Hours",
    answer: [
      "All of our rental offices across Australia and New Zealand are as follows:",
      "Monday to Friday - 9am to 3:30pm",
      "Saturday - 9am to 12pm",
      "Sunday - CLOSED",
      "Some locations allow after-hours pickup or dropoff, however, this may incur a fee. If you require service outside regular hours, please contact us to confirm availability.",
    ],
  },
  {
    question: "Rental Locations and One Way Hires",
    answer: [
      "The Campervan Village has 12 locations around Australia and 3 in New Zealand. One way hires are available between locations, however fees may apply.",
      "To see Campervan Village locations, please click HERE",
    ],
  },
  {
    question: "Liability Reduction Cover",
    answer: [
      "Campervan Village offers damage cover options to reduce your liability in the event of an multiple-vehicle incident, windscreen damage, tyre damage and small scratches and dents.",
      "We also recommend that travelers purchase the most comprehensive Travel Insurance from their travel provider.",
      "Please review our full terms and conditions for more info.",
    ],
  },
]);
</script>

<style lang="postcss" scoped></style>
