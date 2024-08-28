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
          <TabsTrigger value="engineering"> Oris Engineering </TabsTrigger>
          <TabsTrigger value="handyman"> Oris Handyman </TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <div
            class="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:grid-cols-3 md:gap-2 md:pt-5 lg:grid-cols-3"
          >
            <BiomedicalServices />
            <HandymanServices />
          </div>
        </TabsContent>
        <TabsContent value="engineering">
          <div
            class="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:grid-cols-3 md:gap-2 md:pt-5 lg:grid-cols-3"
          >
            <BiomedicalServices />
          </div>
        </TabsContent>
        <TabsContent value="handyman">
          <div
            class="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:grid-cols-3 md:gap-2 md:pt-5 lg:grid-cols-3"
          >
            <HandymanServices />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/SectionHeader.vue'
import BiomedicalServices from '@/components/BiomedicalServices.vue'
import HandymanServices from '@/components/HandymanServices.vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
</script>

<style scoped></style>
