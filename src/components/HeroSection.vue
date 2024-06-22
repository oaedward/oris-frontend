<template>
  <section
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
  </section>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { MoveDown } from 'lucide-vue-next'
</script>

<style scoped></style>
