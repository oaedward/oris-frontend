<template>
  <section class="container py-16 md:py-20" id="contact">
    <SectionHeader title="Let's Talk" subTitle="Have any Questions?" />
    <form action="mailto:info@orisexpress.com" method="POST" class="mx-auto w-full pt-10 sm:w-2/4">
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

      <div class="pt-4 group-hover:block">
        <Button
          class="select-none rounded-lg bg-primary py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-primary-foreground-500/20 transition-all duration-500 hover:bg-primary-foreground hover:shadow-lg hover:shadow-primary-foreground-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="submit"
          data-ripple-light="true"
        >
          Submit
        </Button>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/SectionHeader.vue'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Label from './ui/label/Label.vue'
</script>

<style scoped></style>
