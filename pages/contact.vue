<template>
  <div class="grid w-full max-w-screen-lg gap-40 px-2 py-20 mx-auto">
    <FormKit
      type="form"
      :actions="false"
      :config="{
        // config override applies to all nested FormKit components
        classes: {
          outer: 'mb-5',
          label: 'block mb-1 font-bold text-sm',
          inner: 'max-w-md border border-gray-400 rounded-lg mb-1',
          input:
            'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400 rounded-lg',
          help: 'text-xs text-gray-500',
          messages: 'list-none p-0 mt-1 mb-0',
          message: 'text-red-500 mb-1 text-xs',
        },
      }"
    >
      <FormKit label="Your Name" type="text" />
      <FormKit
        type="select"
        label="Which model are you interested in?"
        name="small_country"
        :options="['no', 'yes']"
      />
    </FormKit>
  </div>
</template>

<script setup>
import { useStore } from "@/stores.vehicles.js";
const store = useStore();
const models = computed(() => {});
</script>

<style lang="scss" scoped></style>
