<template>
  <div class="container px-6 py-10 mx-auto">
    <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
      <div
        class="flex items-end overflow-hidden bg-cover rounded-lg h-96"
        style="background-image: url('/assets/images/Placeholder.png')"
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
        style="background-image: url('/assets/images/Placeholder.png')"
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
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped></style>
