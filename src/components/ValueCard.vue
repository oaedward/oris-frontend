<template>
  <div class="relative w-full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-primary-foreground"
    >
      <path
        fill-rule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clip-rule="evenodd"
      />
    </svg>
    <div class="ml-6">
      <h4 class="font-bold uppercase text-primary">
        {{ value }}
      </h4>
      <p class="mt-2 max-w-screen-sm text-sm text-gray-500">
        {{ description }}
      </p>
      <!-- <span class="mt-1 block text-sm font-semibold text-blue-500"
                        >2007</span
                    > -->
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  value: string
  description?: string
}>()
</script>

<style scoped></style>
