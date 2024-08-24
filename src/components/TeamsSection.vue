<template>
  <section class="py-8 md:py-10 bg-accent">
    <div class="container">
      <SectionHeader title="Our Team" subTitle="Your main Butlers at Oris" />
      <div class="grid grid-cols-1 gap-8 mt-2 xl:mt-0 md:grid-cols-2 xl:grid-cols-3">
        <TeamsCard
          name="Emmanuel Obuobi"
          portfolio="Founder/General Manager - Oris Express"
          image="https://images.pexels.com/photos/7794435/pexels-photo-7794435.jpeg?auto=compress&cs=tinysrgb&w=800"
        />
        <!-- <TeamsCard
          name="Oris Express"
          portfolio="Manager - Oris Consult"
          image="https://images.pexels.com/photos/7794435/pexels-photo-7794435.jpeg?auto=compress&cs=tinysrgb&w=800"
        /> -->
        <!-- <TeamsCard
          name="Oris Express"
          portfolio="Manager - Oris Engineering"
          image="https://images.pexels.com/photos/7794435/pexels-photo-7794435.jpeg?auto=compress&cs=tinysrgb&w=800"
        /> -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TeamsCard from '@/components/TeamsCard.vue'
import SectionHeader from '@/components/SectionHeader.vue'
</script>

<style scoped></style>
