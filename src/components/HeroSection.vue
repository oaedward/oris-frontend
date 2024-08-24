<template>
  <!-- <section
    class="w-full bg-center bg-cover h-screen"
    style="
      background-image: url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80');
    "
  >
    <div class="flex flex-col items-center justify-center w-full h-full bg-accent/80">
      <div class="text-center">
        <p class="text-lg font-medium leading-8 text-primary">
          Introducing the Oris Express Platform
        </p>
        <h1 class="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-gray-900">
          Welcome to Oris Express
        </h1>
        <p class="mt-3 text-md leading-relaxed text-slate-800">
          Explore all our services and products to find your right solution.
        </p>
      </div>

      <div class="mt-6 flex items-center justify-center gap-4">
        <a
          href="#about"
          v-smooth-scroll
          class="transform rounded-md text-white transition-colors transition-al l duration-300"
          ><Button variant="secondary">
            <MoveDown :size="28" class="animate-bounce text-primary" /> </Button
        ></a>
      </div>
    </div>
  </section> -->
  <div class="relative isolate px-6 pt-14 lg:px-8">
    <div
      class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true"
    >
      <!-- <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      ></div> -->
    </div>
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <!-- <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div
          class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
        >
          Announcing our next round of funding.
          <a href="#" class="font-semibold text-indigo-600"
            ><span class="absolute inset-0" aria-hidden="true"></span>Read more
            <span aria-hidden="true">&rarr;</span></a
          >
        </div>
      </div> -->
      <div class="text-center bg-white opacity-90 shadow-sm rounded-lg p-10">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Welcome to Oris Express
        </h1>
        <p class="mt-6 text-sm leading-8 text-gray-600">
          Where Expertise Meets Every Need. From fixing what’s broken to fueling your ambitions,
          we’re the butler you can trust.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <div class="mt-6 flex items-center justify-center gap-4">
            <a
              href="#about"
              v-smooth-scroll
              class="transform rounded-md text-white transition-colors transition-al l duration-300"
              ><Button variant="secondary">
                <MoveDown :size="28" class="animate-bounce text-primary" /> </Button
            ></a>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <svg
        class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="e813992c-7d03-4cc4-a2bd-151760b470a0"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            stroke-width="0"
          />
        </svg>
        <rect
          width="80%"
          height="100%"
          stroke-width="0"
          fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
        />
      </svg>
      <!-- <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="#000">
          <path
            d="M0 0v100c166.7 0 166.7-66 333.3-66S500 77 666.7 77 833.3 28 1000 28V0H0Z"
            opacity=".5"
          ></path>
          <path
            d="M0 0v100c166.7 0 166.7-66 333.3-66S500 70 666.7 70 833.3 16 1000 16V0H0Z"
            opacity=".5"
          ></path>
          <path d="M0 0v100c166.7 0 166.7-66 333.3-66S500 63 666.7 63 833.3 4 1000 4V0H0Z"></path>
        </svg>
      </div> -->
    </div>
    <!-- <div
      class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    >
      <div
        class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      ></div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { MoveDown } from 'lucide-vue-next'
</script>

<style scoped></style>
