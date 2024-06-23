<template>
  <MainLayout>
    <PageHeader title="Oris Consult" />
    <ServiceNavigation name="Consult" />
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        <div class="lg:-mx-6 lg:flex lg:items-center">
          <img
            class="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[24rem]"
            src="https://images.pexels.com/photos/5561913/pexels-photo-5561913.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
          />

          <div class="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
            <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
              Welcome to Oris Consult
            </h1>

            <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
              Our mission is to provide exceptional support and expertise to students and businesses
              alike. We are dedicated to helping you achieve your goals through our comprehensive
              range of services.
            </p>

            <h3 class="mt-6 text-lg font-medium text-primary">Oris Express</h3>
            <p class="text-gray-600 dark:text-gray-300">Manager, Oris Consult</p>
          </div>
        </div>
      </div>
    </section>
    <ConsultSection />
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import PageHeader from '@/components/PageHeader.vue'
import ConsultSection from '@/components/ConsultSection.vue'
import ServiceNavigation from '@/components/ServiceNavigation.vue'
</script>

<style scoped></style>
