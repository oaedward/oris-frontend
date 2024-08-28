<template>
  <MainLayout>
    <PageHeader title="Our Departments" />
    <ServiceNavigation image="/src/assets/images/ORIS FINAL LOGOs-04.png" />

    <section class="dark:bg-gray-900">
      <!-- <SectionHeader
                title="Our Departments"
                subTitle="Where all the magic happens"
            /> -->
      <DepartmentList />
    </section>

    <section class="bg-accent py-10 bg-white dark:bg-gray-900">
      <SectionHeader
        title="How Oris Express Works"
        subTitle="We lead you to your goal in three simple steps"
        class="mt-16"
      />
      <div class="container px-6 py-12 mx-auto">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Icon icon="iconoir:number-1-square-solid" class="text-primary h-20 w-20" />

            <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
              Tell us your needs
            </h1>

            <p class="mt-2 text-gray-500 dark:text-gray-400">
              Connect with us and tell us what you want Oris Express to help you with. With our
              Consultancy and Engineering Departments, we have your solutions pending.
            </p>
          </div>

          <div>
            <Icon icon="iconoir:number-2-square-solid" class="text-primary h-20 w-20" />

            <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
              Work with Oris Express through the process
            </h1>

            <p class="mt-2 text-gray-500 dark:text-gray-400">
              You get to work with entire Oris Express force on your project with no preferencial
              treatments to the complexity of projects.
            </p>
          </div>

          <div>
            <Icon icon="iconoir:number-3-square-solid" class="text-primary h-20 w-20" />
            <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Satisfaction</h1>

            <p class="mt-2 text-gray-500 dark:text-gray-400">
              We are never done until you have that 😊
            </p>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import PageHeader from '@/components/PageHeader.vue'
import SectionHeader from '@/components/SectionHeader.vue'
import ServiceNavigation from '@/components/ServiceNavigation.vue'
import DepartmentList from '@/components/DepartmentList.vue'
import { Icon } from '@iconify/vue'
</script>

<style scoped></style>
