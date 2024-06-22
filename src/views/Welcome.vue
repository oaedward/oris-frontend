<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import HeroSection from '@/components/HeroSection.vue'
import DepartmentSection from '@/components/DepartmentSection.vue'
import AboutSummary from '@/components/AboutSummary.vue'
import ServiceSection from '@/components/ServiceSection.vue'
import WhyChooseUs from '@/components/WhyChooseUs.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>

<template>
  <MainLayout>
    <div class="dark:bg-gray-900 dark:text-white/50">
      <HeroSection id="hero" />
      <AboutSummary id="about" />
      <DepartmentSection id="department" />
      <ServiceSection id="services" />
      <WhyChooseUs />
      <ContactSection id="contact" />
    </div>
  </MainLayout>
</template>
