<template>
  <MainLayout>
    <PageHeader title="Contact Us" />
    <div>
      <ContactSection />
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import PageHeader from '@/components/PageHeader.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>

<style scoped></style>
