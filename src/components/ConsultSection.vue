<template>
  <section class="py-16 md:py-20">
    <div class="container">
      <SectionHeader
        title="Our Services"
        subTitle="Explore the comprehensive services Oris Express has to offer"
      />
      <Tabs default-value="all" class="w-full mt-5">
        <TabsList class="">
          <TabsTrigger value="all"> All Services </TabsTrigger>
          <TabsTrigger value="education"> Oris Education </TabsTrigger>
          <TabsTrigger value="obd"> Oris Business Development </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div
            class="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:grid-cols-3 md:gap-2 md:pt-5 lg:grid-cols-4"
          >
            <EducationServices />
            <BusinessDevelopmentServices />
          </div>
        </TabsContent>
        <TabsContent value="education">
          <div
            class="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:grid-cols-3 md:gap-2 md:pt-5 lg:grid-cols-4"
          >
            <EducationServices />
          </div>
        </TabsContent>
        <TabsContent value="obd">
          <div
            class="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:grid-cols-3 md:gap-2 md:pt-5 lg:grid-cols-4"
          >
            <BusinessDevelopmentServices />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/SectionHeader.vue'
import EducationServices from '@/components/EducationServices.vue'
import BusinessDevelopmentServices from '@/components/BusinessDevelopmentServices.vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
</script>

<style scoped></style>
