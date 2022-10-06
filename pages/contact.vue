<template>
  <div class="grid w-full max-w-screen-lg gap-40 px-2 py-20 mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <p
          class="mb-5 w-max bg-gradient-to-tr from-primary-500 to-blue-400 bg-clip-text"
        >
          <span class="text-3xl font-bold text-primary-500/50"
            >Get in Touch</span
          >
        </p>
        <p class="mb-5 text-gray-700">
          Got a question about our campervans, or would you like to enquire
          about a purchase? Please call, or use the form to send us a message
          and we'll get back to you.
        </p>
        <a
          :href="store.company.phone.replaceAll(' ', '')"
          class="text-accent-500 text-lg"
        >
          <i class="fa-sharp fa-phone mr-2"></i>{{ store.company.phone }}
        </a>
      </div>
      <div class="p-4 rounded-lg shadow-lg border">
        <FormKit
          type="form"
          :actions="false"
          :config="{
            // config override applies to all nested FormKit components
            classes: {
              outer: 'mb-2',
              label: 'block mb-1 font-bold text-sm text-primary-500',
              inner: 'rounded-lg h-min',
              wrapper: 'h-min',
              input:
                'w-full h-full py-3 block px-3 text-base text-gray-700 placeholder-gray-400 rounded-lg border',
              help: 'text-xs text-gray-500',
              messages: 'list-none p-0 mt-1 mb-0',
              message: 'text-red-500 mb-1 text-xs',
            },
          }"
        >
          <FormKit label="Your Name" type="text" validation="required" />
          <div class="grid gap-x-4 grid-cols md:grid-cols-2">
            <FormKit
              type="tel"
              label="Phone"
              validation="required"
              class="relative"
            />
            <FormKit
              type="email"
              label="Email"
              validation="?email"
              validation-visibility="live"
            />
          </div>

          <FormKit
            type="select"
            label="Which model are you enquiring about?"
            name="model"
            v-model="form.model"
          >
            <option value="not specified">---</option>
            <option v-for="model in models" :value="model.name">
              {{ model.name }}
            </option>
          </FormKit>
          <FormKit
            type="textarea"
            label="Message"
            rows="4"
            validation="required"
            placeholder="Hi, I was wondering about..."
          />
          <FormKit
            type="submit"
            input-class="bg-primary-500 hover:bg-primary-600 text-white"
            ><i class="fa-sharp fa-paper-plane"></i> Send
          </FormKit>
        </FormKit>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/stores/vehicles.js";
const store = useStore();
const models = computed(() => {
  return [...store.vehicles];
});

const form = ref({
  name: "",
  phone: "",
  email: "",
  model: "not specified",
  message: "",
});
</script>

<style lang="scss" scoped></style>
