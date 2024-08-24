<template>
  <div
    class="flex flex-col relative rounded-xl bg-white bg-clip-border text-gray-700 shadow-md group cursor-pointer overflow-hidden transition-all duration-100"
  >
    <h5
      class="text-3xl font-bold absolute mx-auto px-8 py-14 group-hover:opacity-0 group-hover:translate-x-[-100%] translate-x-0 transition-all duration-200"
    >
      {{ title }}
    </h5>
    <div
      class="p-6 group-hover:translate-x-0 group-hover:opacity-100 translate-x-full opacity-0 transition-all duration-200"
    >
      <h5
        class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
      >
        {{ title }}
      </h5>
      <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
        {{ description }}
      </p>
    </div>
    <div class="p-6 pt-0 hidden group-hover:block">
      <RouterLink :to="link">
        <button
          class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          Request Service
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
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
