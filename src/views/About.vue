<template>
  <MainLayout>
    <PageHeader title="About Us" />
    <div>
      <AboutSection id="about" />
      <MissionVisionSection />
      <CoreValuesSection />
      <TeamsSection />
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import PageHeader from '@/components/PageHeader.vue'
import AboutSection from '@/components/AboutSection.vue'
import MissionVisionSection from '@/components/MissionVisionSection.vue'
import CoreValuesSection from '@/components/CoreValuesSection.vue'
import TeamsSection from '@/components/TeamsSection.vue'
</script>

<style scoped></style>
