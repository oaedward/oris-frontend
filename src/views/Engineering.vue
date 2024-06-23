<template>
  <MainLayout>
    <PageHeader title="Oris Engineering" />
    <ServiceNavigation name="Engineering" />
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        <div class="lg:-mx-6 lg:flex lg:items-center">
          <img
            class="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[24rem]"
            src="https://images.pexels.com/photos/3862631/pexels-photo-3862631.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
          />

          <div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
            <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
              Welcome to Oris Engineering
            </h1>

            <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
              Our team of skilled engineers and technicians is dedicated to delivering cutting-edge
              solutions that address a wide range of technical challenges. Whether you are in the
              healthcare industry or need reliable handyman services, we have the expertise to meet
              your needs with precision and professionalism.
            </p>

            <h3 class="mt-6 text-lg font-medium text-primary">Oris Express</h3>
            <p class="text-gray-600 dark:text-gray-300">Manager, Oris Engineering</p>
          </div>
        </div>
      </div>
    </section>
    <EngineeringSection />
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import PageHeader from '@/components/PageHeader.vue'
import EngineeringSection from '@/components/EngineeringSection.vue'
import ServiceNavigation from '@/components/ServiceNavigation.vue'
</script>

<style scoped></style>
