<template>
  <section class="py-16 md:py-20 bg-accent min-h-screen">
    <div
      class="container flex flex-col gap-8 items-center justify-center px-6 md:px-10 lg:text-left"
    >
      <SectionHeader title="Why Choose Us" subTitle="What sets us apart" />
      <div class="space-y-6 border-l-2 border-dashed">
        <ValueCard
          value="I - Innovation"
          description="We embrace creativity and technological advancement, continuously seeking new and improved ways to serve our clients and stay ahead in our fields."
        />
        <ValueCard
          value="M - Mutual Trust"
          description="We build and maintain strong relationships based on trust, transparency, and mutual respect, fostering long-term partnerships with our clients and stakeholders."
        />
        <ValueCard
          value="P - Professionalism"
          description="Our team conducts itself with the utmost professionalism, upholding the highest ethical standards and delivering exceptional quality in every project."
        />
        <ValueCard
          value="R - Responsibility"
          description="We take responsibility for our actions and their impact, ensuring we deliver on our commitments and contribute positively to society."
        />
        <ValueCard
          value="E - Empowerment"
          description="We empower our employees and clients by providing the knowledge, tools, and opportunities needed to achieve their full potential."
        />
        <ValueCard
          value="S - Service Excellence"
          description="We are committed to exceeding expectations and delivering outstanding service, ensuring the satisfaction and success of our clients."
        />
        <ValueCard
          value="S - Sustainability"
          description="We prioritize sustainability in our practices, striving to minimize our environmental impact and promote long-term ecological balance."
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/SectionHeader.vue'
import ValueCard from './ValueCard.vue'
</script>

<style scoped></style>
