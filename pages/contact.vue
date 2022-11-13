<template>
  <div class="grid w-full max-w-screen-md gap-40 px-2 py-20 mx-auto">
    <div class="grid grid-cols-1 gap-10">
      <div v-if="!submitted">
        <p
          class="mb-5 w-max bg-gradient-to-tr from-primary-500 to-blue-400 bg-clip-text"
        >
          <span class="text-3xl font-bold text-primary-500/50"
            >Get in Touch</span
          >
        </p>
        <p class="mb-5 text-gray-700">
          Please call, or use the form to send us a message and we'll get back
          to you.
        </p>
        <a
          :href="'tel:' + store.company.phone.replaceAll(' ', '')"
          class="text-accent-500 text-lg"
        >
          <i class="fa-sharp fa-phone mr-2"></i>{{ store.company.phone }}
        </a>
      </div>
      <SmoothReflow>
        <div class="p-4 rounded-lg shadow-lg border relative overflow-hidden">
          <div
            v-show="submitting"
            class="absolute inset-0 backdrop-blur-sm grid place-items-center bg-gray-200/50"
          >
            <i class="fa-sharp fa-circle-notch fa-spin fa-2x text-accent"></i>
          </div>
          <div v-if="submitted" class="grid place-items-center py-10">
            <p class="font-cursive text-accent text-2xl mb-4">Thanks</p>
            <p>We'll get back to you shortly</p>
            <NuxtLink class="mt-10 text-accent" to="/"
              >go back? <i class="fa-sharp fa-house"></i
            ></NuxtLink>
          </div>
          <FormKit
            v-else
            type="form"
            @submit="handleSubmit"
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
            <FormKit
              label="Your Name"
              type="text"
              validation="required"
              v-model="form.name"
            />
            <div class="grid gap-x-4 grid-cols md:grid-cols-2">
              <FormKit
                type="tel"
                label="Phone"
                v-model="form.phone"
                validation="required"
                class="relative"
              />
              <FormKit
                type="email"
                label="Email"
                v-model="form.email"
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
              type="select"
              label="Purchase city"
              name="city"
              v-model="form.city"
            >
              <option value="not specified">---</option>
              <option v-for="item in store.cities" :value="item">
                {{ item }}
              </option>
            </FormKit>
            <FormKit
              type="textarea"
              label="Message"
              rows="4"
              v-model="form.message"
              validation="required"
              placeholder="Hi, I was wondering about..."
            />
            <FormKit
              type="submit"
              input-class="bg-primary-500 hover:bg-primary-600 text-white"
            >
              <i class="fa-sharp fa-paper-plane"></i> Send
            </FormKit>

            <!-- H o n e y p o t -->
            <template>
              <label
                class="-z-10 w-0 h-0 absolute inset-0 opacity-0"
                for="name"
              ></label>
              <input
                class="-z-10 w-0 h-0 absolute inset-0 opacity-0"
                autocomplete="off"
                type="text"
                id="name"
                name="name"
                placeholder="Your name here"
                v-model="honey.name"
              />
              <label
                class="-z-10 w-0 h-0 absolute inset-0 opacity-0"
                for="email"
              ></label>
              <input
                class="-z-10 w-0 h-0 absolute inset-0 opacity-0"
                autocomplete="off"
                type="text"
                id="email"
                name="email"
                placeholder="Your e-mail here"
                v-model="honey.email"
              />
            </template>
          </FormKit>
        </div>
      </SmoothReflow>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/stores/vehicles.js";
const store = useStore();
const models = computed(() => {
  return [...store.vehicles];
});
const cities = computed(() => store.cities);

const submitting = ref(false);
const submitted = ref(false);

const form = ref({
  name: "",
  phone: "",
  email: "",
  model: "not specified",
  message: "",
  city: "not specified",
});

const honey = ref({
  name: "",
  email: "",
});

async function handleSubmit(values) {
  console.log("submitting", values);
  submitting.value = true;

  if (honey.value.name || honey.value.email) {
    setTimeout(() => {
      submitting.value = false;
      submitted.value = true;
    }, 2000);
    return;
  }

  await fetch("/.netlify/functions/sendmail", {
    method: "POST",
    body: JSON.stringify(form.value),
  }).then((res) => {
    console.log(res);
    if (!res.ok) {
      alert("Message failed to send. Please try again, or give us a call.");
      submitting.value = false;
      return;
    }
    submitting.value = false;
    submitted.value = true;
  });
}
</script>

<style lang="postcss" scoped></style>
