<template>
  <section class="py-16 md:py-20 bg-accent">
    <div class="container">
      <SectionHeader title="Our Team" subTitle="The people that make Oris Express possible" />
      <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-10 md:grid-cols-2 xl:grid-cols-3">
        <TeamsCard
          name="Oris Express"
          portfolio="CEO - Oris Express"
          image="https://images.pexels.com/photos/7794435/pexels-photo-7794435.jpeg?auto=compress&cs=tinysrgb&w=800"
        />
        <TeamsCard
          name="Oris Express"
          portfolio="Manager - Oris Consult"
          image="https://images.pexels.com/photos/7794435/pexels-photo-7794435.jpeg?auto=compress&cs=tinysrgb&w=800"
        />
        <TeamsCard
          name="Oris Express"
          portfolio="Manager - Oris Engineering"
          image="https://images.pexels.com/photos/7794435/pexels-photo-7794435.jpeg?auto=compress&cs=tinysrgb&w=800"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TeamsCard from '@/components/TeamsCard.vue'
import SectionHeader from '@/components/SectionHeader.vue'
</script>

<style scoped></style>
