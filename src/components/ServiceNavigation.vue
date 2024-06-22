<template>
  <nav class="bg-white shadow dark:bg-gray-800 sticky top-0 z-20">
    <div
      class="container flex items-center justify-between p-2 mx-auto text-gray-600 capitalize dark:text-gray-300"
    >
      <div>
        <RouterLink :to="{ name: 'services' }" class="flex gap-2 items-center">
          <ApplicationLogo class="block h-9 w-auto fill-current text-gradark:text-gray-200" />
          <span class="font-bold">{{ name }}</span>
        </RouterLink>
      </div>
      <NavigationMenu class="lg:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <RouterLink :to="{ name: 'services' }" :class="navigationMenuTriggerStyle()"
              >Overview</RouterLink
            >
          </NavigationMenuItem>
          <NavigationMenuItem>
            <RouterLink :to="{ name: 'consult' }" :class="navigationMenuTriggerStyle()"
              >Oris Consult</RouterLink
            >
          </NavigationMenuItem>
          <NavigationMenuItem>
            <RouterLink :to="{ name: 'engineering' }" :class="navigationMenuTriggerStyle()"
              >Oris Engieering</RouterLink
            >
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ApplicationLogo from '@/components/ApplicationLogo.vue'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'

defineProps<{
  name?: string
}>()
</script>

<style scoped></style>
