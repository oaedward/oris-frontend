<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
      <div class="mt-8 lg:-mx-6 lg:flex align-top">
        <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
          <SectionHeader
            title="Meet Oris Express"
            subTitle="A comprehensive solutions expert"
            class="text-center lg:text-left"
            classSub="text-center lg:text-left"
          />

          <p class="mt-3 text-md text-gray-500 dark:text-gray-300 md:text-lg">
            Welcome to Oris Express, your trusted partner in educatoinal and business consultancy
            and engineering solutions. Our company is dedicated to providing comprehensive and
            innovative services that cater to the needs, ensuring excellence and satisfaction for
            all our clients.
          </p>
          <p class="mt-3 text-md text-gray-500 dark:text-gray-300 md:text-lg">
            At Oris Express, we specialize in two main areas: Education/Business Consultancy and
            Engineering.
          </p>
          <p class="mt-3 text-md line-clamp-3 text-gray-500 dark:text-gray-300 md:text-lg">
            Welcome to Oris Express, your trusted partner in educatoinal and business consultancy
            and engineering solutions. Our company is dedicated to providing comprehensive and
            innovative services that cater to the needs, ensuring excellence and satisfaction for
            all our clients.
          </p>
          <RouterLink
            :to="{ name: 'about' }"
            class="inline-block mt-2 text-primary underline hover:text-gray-900"
            >Read more</RouterLink
          >
        </div>

        <img
          class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96 lg:mt-0 mt-10"
          src="https://images.pexels.com/photos/7722866/pexels-photo-7722866.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="about-image"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SectionHeader from './SectionHeader.vue'
</script>

<style scoped></style>
