<script setup lang="ts">
import { Menu } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
</script>

<template>
  <div>
    <!-- <NavigationMenu class="flex items-center justify-between p-6 lg:px-8">
      <NavigationMenuList>
        <NavigationMenuItem>
          <RouterLink :to="{ name: 'home' }" :class="navigationMenuTriggerStyle()">Home</RouterLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <RouterLink :to="{ name: 'about' }" :class="navigationMenuTriggerStyle()"
            >About</RouterLink
          >
        </NavigationMenuItem>
        <NavigationMenuItem>
          <RouterLink :to="{ name: 'services' }" :class="navigationMenuTriggerStyle()"
            >Departments</RouterLink
          >
        </NavigationMenuItem>
        <NavigationMenuItem>
          <RouterLink :to="{ name: 'contact' }" :class="navigationMenuTriggerStyle()"
            >Contact</RouterLink
          >
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu> -->

    <div class="hidden lg:flex lg:gap-x-12 p-6 lg:px-8">
      <RouterLink :to="{ name: 'home' }" class="text-sm font-light leading-6 text-gray-900"
        >Home</RouterLink
      >
      <RouterLink :to="{ name: 'about' }" class="text-sm font-light leading-6 text-gray-900"
        >About</RouterLink
      >
      <RouterLink :to="{ name: 'services' }" class="text-sm font-light leading-6 text-gray-900"
        >Services</RouterLink
      >
      <RouterLink :to="{ name: 'contact' }" class="text-sm font-light leading-6 text-gray-900"
        >Contact</RouterLink
      >
    </div>

    <Sheet>
      <SheetTrigger class="block lg:hidden">
        <Button variant="outline">
          <Menu class="w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" class="w-[350px]">
        <SheetHeader>
          <SheetTitle>
            <h2 class="mb-2 px-4 text-lg font-semibold text-left">Oris Express</h2>
          </SheetTitle>
        </SheetHeader>
        <SheetDescription>
          <div class="flex flex-col gap-1">
            <div class="border-b py-2">
              <RouterLink :to="{ name: 'home' }">
                <Button variant="ghost" class="w-full justify-start"> Home </Button>
              </RouterLink>
            </div>
            <div class="border-b py-2">
              <RouterLink :to="{ name: 'about' }">
                <Button variant="ghost" class="w-full justify-start"> About </Button>
              </RouterLink>
            </div>
            <div class="border-b py-2">
              <RouterLink :to="{ name: 'services' }">
                <Button variant="ghost" class="w-full justify-start"> Departments </Button>
              </RouterLink>
            </div>
            <div class="border-b py-2">
              <RouterLink :to="{ name: 'contact' }">
                <Button variant="ghost" class="w-full justify-start"> Contact </Button>
              </RouterLink>
            </div>
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  </div>
</template>

<style scoped></style>
