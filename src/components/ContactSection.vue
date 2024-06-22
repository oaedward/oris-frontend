<template>
  <section class="container py-16 md:py-20" id="contact">
    <SectionHeader title="Contact Oris Express" subTitle="Have any Questions?" />
    <form class="mx-auto w-full pt-10 sm:w-3/4">
      <div class="flex flex-col md:flex-row gap-4">
        <Input placeholder="Name" type="text" id="name" />

        <Input placeholder="Email" type="text" id="email" />
      </div>
      <Textarea
        placeholder="Type your message here."
        id="message"
        cols="30"
        rows="10"
        class="mt-6"
      />

      <button
        class="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-gray-50"
      >
        Send
        <i class="bx bx-chevron-right relative -right-2 text-3xl"></i>
      </button>
    </form>
    <div class="flex flex-col pt-16 lg:flex-row">
      <div
        class="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-gray-300 px-4 py-4 sm:py-8 lg:w-1/3"
      >
        <div class="flex items-center">
          <i class="bx bx-phone text-2xl text-grey-40"></i>
          <p class="pl-2 font-body font-bold text-grey-40 lg:text-lg">Phone</p>
        </div>
        <p class="pt-2 text-left font-body font-bold text-primary lg:text-md">(+233) 50 601 0209</p>
      </div>
      <div
        class="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-gray-300 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2"
      >
        <div class="flex items-center">
          <i class="bx bx-envelope text-2xl text-grey-40"></i>
          <p class="pl-2 font-body font-bold text-grey-40 lg:text-lg">Phone</p>
        </div>
        <p class="pt-2 text-left font-body font-bold text-primary lg:text-md">(+233) 55 047 8180</p>
      </div>
      <div
        class="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-gray-300 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2"
      >
        <div class="flex items-center">
          <i class="bx bx-map text-2xl text-grey-40"></i>
          <p class="pl-2 font-body font-bold text-grey-40 lg:text-lg">Email</p>
        </div>
        <p class="pt-2 text-left font-body font-bold text-primary lg:text-md">
          info@orisexpress.com
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/SectionHeader.vue'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
</script>

<style scoped></style>
