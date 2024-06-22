<template>
  <div
    class="flex flex-col w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
  >
    <img class="object-cover object-center w-full h-56" :src="image" :alt="alt" />

    <div class="flex items-center px-6 py-1 bg-primary">
      <Icon :icon="icon" color="white" width="18" />

      <h1 class="mx-3 text-sm font-light text-white">
        {{ category }}
      </h1>
    </div>

    <div class="px-6 py-4">
      <h1 class="text-xl mb-2 font-semibold text-gray-800 dark:text-white">
        {{ title }}
      </h1>

      <p class="line-clamp-4 text-gray-700 text-sm font-light dark:text-gray-400">
        {{ description }}
      </p>
    </div>
    <div class="p-2 flex justify-end">
      <RouterLink :to="link">
        <Button variant="ghost" size="icon" class="text-sm">
          <Icon
            icon="material-symbols:arrow-circle-right-outline-rounded"
            width="20"
            class="text-primary"
          />
        </Button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'

defineProps<{
  title: string
  description: string
  image: string
  alt: string
  category: string
  icon: string
  link: string
}>()
</script>

<style scoped></style>
