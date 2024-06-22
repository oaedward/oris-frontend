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
  <div class="">
    <NavigationMenu class="hidden lg:block">
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
    </NavigationMenu>

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
