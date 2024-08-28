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
    ></div>
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
      <div class="text-center shadow-sm rounded-lg p-10">
        <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">Welcome to Oris Express</h1>
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { MoveDown } from 'lucide-vue-next'
</script>

<style scoped></style>
