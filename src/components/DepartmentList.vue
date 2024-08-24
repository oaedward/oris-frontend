<template>
  <!-- <div class="container px-6 py-10 mx-auto">
    <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
      <div
        class="flex items-end overflow-hidden bg-cover rounded-lg h-96"
        style="
          background-image: url('https://images.pexels.com/photos/5561913/pexels-photo-5561913.jpeg?auto=compress&cs=tinysrgb&w=800');
        "
      >
        <RouterLink :to="{ name: 'consult' }">
          <div
            class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-accent/80 dark:bg-gray-800/60"
          >
            <h2
              class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white hover:text-primary"
            >
              Oris Consult
            </h2>
          </div>
        </RouterLink>
      </div>

      <div
        class="flex items-end overflow-hidden bg-cover rounded-lg h-96"
        style="
          background-image: url('https://images.pexels.com/photos/3862631/pexels-photo-3862631.jpeg?auto=compress&cs=tinysrgb&w=800');
        "
      >
        <RouterLink :to="{ name: 'engineering' }">
          <div
            class="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-accent/80 dark:bg-gray-800/60"
          >
            <h2
              class="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white hover:text-primary"
            >
              Oris Engineering
            </h2>
          </div>
        </RouterLink>
      </div>
    </div>
  </div> -->
  <!-- component -->
  <div class="container px-6 py-10 mx-auto">
    <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
      <div class="flex items-center justify-center">
        <div
          class="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
        >
          <div
            class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700"
          >
            <img
              src="https://images.pexels.com/photos/5561913/pexels-photo-5561913.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="image"
              class="h-full w-full object-cover"
            />
          </div>
          <div class="p-6">
            <h6
              class="mb-4 block font-sans text-base font-semibold leading-relaxed tracking-normal text-pink-500 antialiased"
            >
              Oris Consult
            </h6>
            <h4
              class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
            >
              Lyft launching cross-platform service this week
            </h4>
            <!-- <p
              class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased"
            >
              Like so many organizations these days, Autodesk is a company in transition. It was
              until recently a traditional boxed software company selling licenses. Yet its own
              business model disruption is only part of the story
            </p> -->
            <RouterLink :to="{ name: 'consult' }" class="inline-block">
              <button
                class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <div
          class="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
        >
          <div
            class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700"
          >
            <img
              src="https://images.pexels.com/photos/3862631/pexels-photo-3862631.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="image"
              class="h-full w-full object-cover"
            />
          </div>
          <div class="p-6">
            <h6
              class="mb-4 block font-sans text-base font-semibold leading-relaxed tracking-normal text-gray-800 antialiased"
            >
              Oris Engineering
            </h6>
            <h4
              class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
            >
              Lyft launching cross-platform service this week
            </h4>
            <!-- <p
              class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased"
            >
              Like so many organizations these days, Autodesk is a company in transition. It was
              until recently a traditional boxed software company selling licenses. Yet its own
              business model disruption is only part of the story
            </p> -->
            <RouterLink :to="{ name: 'engineering' }" class="inline-block">
              <button
                class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped></style>
