<template>
  <div
    class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
  >
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
          width="100%"
          height="100%"
          stroke-width="0"
          fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
        />
      </svg>
    </div>
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
    >
      <div
        class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
      >
        <div class="lg:pr-4">
          <SectionHeader
            title="Meet Oris Express"
            subTitle="Our Goal is to be Your Ideal Butler"
            class="text-left md:text-left"
            classSub="text-center md:text-left"
          />
        </div>
      </div>
      <div
        class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
      >
        <img
          class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
          alt=""
        />
      </div>
      <div
        class="bg-white lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
      >
        <div class="lg:pr-4">
          <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
            <p>
              At ORIS EXPRESS, we strive to be the quintessential butler in every aspect of your
              life. Our mission is to be at your service, offering unparalleled support in
              education, business, home, and office engineering. We aim to be the solution you turn
              to in any situation.
            </p>
            <ul role="list" class="mt-8 space-y-8 text-gray-600">
              <li class="flex gap-x-3">
                <svg
                  class="mt-1 h-5 w-5 flex-none text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>
                  We offer a comprehensive range of services designed to support every aspect of
                  your life. From ensuring quality healthcare support through our biomedical
                  engineering solutions, to providing reliable handyman services for all your home
                  and office needs, we are your go-to partner. Our business services focus on
                  strategic development and performance monitoring, while our education support
                  helps with assignments, research, and academic projects. At ORIS EXPRESS, we are
                  committed to being the dependable solution for all your challenges.
                </span>
              </li>
            </ul>

            <div class="flex items-center mt-6">
              <RouterLink :to="{ name: 'about' }" class="inline-block">
                <Button
                  class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-primary transition-all duration-500 hover:bg-primary/10"
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
                </Button>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SectionHeader from './SectionHeader.vue'
</script>

<style scoped></style>
