<template>
  <div
    class="flex flex-col relative rounded-xl bg-white bg-clip-border text-gray-700 shadow-md group cursor-pointer overflow-hidden transition-all duration-100"
  >
    <!-- <div
      class="relative mx-4 -mt-6 h-40 w-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"
    >
      <Image class="h-10 w-10" />
    </div> -->
    <h5
      class="text-3xl font-bold absolute mx-auto px-8 py-20 group-hover:opacity-0 group-hover:translate-x-[-100%] translate-x-0 transition-all duration-500 ease-in-out"
    >
      {{ title }}
    </h5>
    <div
      class="p-6 group-hover:translate-x-0 group-hover:opacity-100 translate-x-full opacity-0 transition-all duration-500 ease-in-out"
    >
      <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 380" fill="#808">
        <path
          d="M172 167.4c3.9 3.6 10.9 2.8 13.2-2.1 2.1-6.7-8-19.7-10.2-27.3-12.4-27.2-25.1-54.3-38.2-81.2-4-9.2-20.1-4.1-15.8 5.9 17.7 34.5 32.5 70.8 51 104.7zm71.2 80.7c-7-9.5-21-.1-13.5 9.9 10 25.7 18.1 52 27.7 77.9 3.1 9.5 19.6 6.2 16.3-4.2-16.6-46.2-24.6-72.3-30.5-83.6zm-63.1-14.3c-6.4 3.5-7.6 12.5-11.5 18.3-12.7 25.4-26.2 50.3-39.6 75.3-2.1 3.9-.4 8.5 3.4 10.6 3.6 2 9.1 1.5 11.2-2.5 22-40.9 34.3-65.3 45.1-87.9 5.9-6.6.3-16.6-8.6-13.8zm54.7-70.1c16.8-38.6 32.2-65.9 57.6-113.4 4.9-8.8-9.6-16.5-14.5-8.1-20 38.1-40.7 76-56.7 115.9-3.5 8.1 10.3 13.7 13.6 5.6zm-78.5 31.1c-19.6-4.3-40-4-60-5.6-21.3-1.3-42.7-2.4-64-4.3-4.3-.4-8.7 2.5-9 7.1.8 14.1 25.9 8.4 35.8 10.8 30.7 2.2 61.7 2.1 92.3 5.8 9.8 3.4 14.6-10.6 4.9-13.8zm191.7-3.4c-24.6.8-49.2 1.7-73.7 3.4-6 1-12.8-.5-18.2 2.5-4.1 3.1-2.7 9.5 1.7 11.6 30.2 1.8 61.2-2.3 91.6-2.2 10.9-.3 8.6-16-1.4-15.3z"
        ></path>
      </svg>
      <h5
        class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
      >
        {{ title }}
      </h5>
      <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
        {{ description }}
      </p>
    </div>
    <div class="p-6 pt-0 group-hover:block">
      <RouterLink :to="link">
        <Button
          class="select-none rounded-lg bg-primary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-primary-foreground-500/20 transition-all duration-500 hover:bg-primary-foreground hover:shadow-lg hover:shadow-primary-foreground-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          Request Service
        </Button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import Image from './Image.vue'
import { Button } from './ui/button'

defineProps<{
  title: string
  description: string
  // image: string
  // alt: string
  // category: string
  // icon: string
  link: string
}>()
</script>

<style scoped></style>
