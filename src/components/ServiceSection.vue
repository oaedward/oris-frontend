<template>
  <section class="py-5 md:py-10">
    <div class="container">
      <SectionHeader
        title="Our Services"
        subTitle="Explore the comprehensive services Oris Express has to offer"
      />

      <div
        class="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:grid-cols-3 md:gap-2 md:pt-12 lg:grid-cols-4"
      >
        <ServiceCard
          title="Oris Education"
          description="We offer a range of educational support services tailored to help students succeed. Our services include assisting with research theses, providing homework help, and making educational content readily available. Our goal is to support students in their academic journey, helping them achieve their full potential through expert guidance and resources."
          category="Oris Consult"
          image="/assets/images/Placeholder.png"
          alt="Oris Consult Image"
          icon="material-symbols-light:handshake-outline-sharp"
          link="consult"
        />
        <ServiceCard
          title="Oris Business Development"
          description="Our consultancy services extend to helping businesses grow and thrive. We provide strategic insights, market analysis, and practical solutions to enhance business performance and achieve sustainable growth. Whether you are a startup or an established enterprise, we have the expertise to take your business to the next level."
          category="Oris Consult"
          image="/assets/images/Placeholder.png"
          alt="Oris Consult Image"
          icon="material-symbols-light:handshake-outline-sharp"
          link="consult"
        />
        <ServiceCard
          title="Oris Biomedical"
          description="Our engineering division excels in biomedical engineering, where we combine innovation and technical expertise to develop advanced medical devices and solutions. Our goal is to improve patient care and healthcare outcomes through cutting-edge technology and engineering prowess."
          category="Oris Engineering"
          image="/assets/images/Placeholder.png"
          alt="Oris Engineering Image"
          icon="material-symbols-light:engineering-outline-sharp"
          link="engineering"
        />
        <ServiceCard
          title="Oris Handyman"
          description="We also offer reliable handyman services, addressing various maintenance and repair needs with precision and professionalism. Our skilled technicians are equipped to handle a wide range of tasks, ensuring your property remains in excellent condition."
          category="Oris Engineering"
          image="/assets/images/Placeholder.png"
          alt="Oris Engineering Image"
          icon="material-symbols-light:engineering-outline-sharp"
          link="engineering"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from '@/components/SectionHeader.vue'
import ServiceCard from '@/components/ServiceCard.vue'
</script>

<style scoped></style>
