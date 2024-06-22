<template>
  <section class="">
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        <div class="mt-8 lg:-mx-6 lg:flex align-top">
          <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
            <SectionHeader
              title="Meet Oris Express"
              subTitle="A comprehensive solutions expert"
              class="text-center lg:text-left"
              classSub="text-center lg:text-left"
            />

            <p class="mt-3 text-md text-gray-500 dark:text-gray-300 md:text-lg">
              Welcome to Oris Express, your trusted partner in educatoinal and business consultancy
              and engineering solutions. Our company is dedicated to providing comprehensive and
              innovative services that cater to the needs, ensuring excellence and satisfaction for
              all our clients.
            </p>

            <p c class="mt-3 text-md text-gray-500 dark:text-gray-300 md:text-lg">
              At Oris Express, we specialize in two main areas: Education/Business Consultancy and
              Engineering.
            </p>
            <h4 class="font-bold mt-6">Consultancy Services</h4>
            <p class="mt-3 text-md text-gray-500 dark:text-gray-300 md:text-lg">
              Education Services: We offer expert guidance and support in the education sector,
              helping institutions improve their strategies, curriculum, and overall effectiveness.
              Our team of seasoned professionals is committed to driving educational excellence and
              fostering a culture of continuous improvement.
            </p>
            <p class="mt-3 text-md text-gray-500 dark:text-gray-300 md:text-lg">
              Business Development Management: Our consultancy services extend to helping businesses
              grow and thrive. We provide strategic insights, market analysis, and practical
              solutions to enhance business performance and achieve sustainable growth. Whether you
              are a startup or an established enterprise, we have the expertise to take your
              business to the next level.
            </p>
            <h4 class="font-bold mt-6">Engineering Services</h4>
            <p class="mt-3 text-md text-gray-500 dark:text-gray-300 md:text-lg">
              Biomedical Engineering: Our engineering division excels in biomedical engineering,
              where we combine innovation and technical expertise to develop advanced medical
              devices and solutions. Our goal is to improve patient care and healthcare outcomes
              through cutting-edge technology and engineering prowess.
            </p>
            <p class="mt-3 text-md text-gray-500 dark:text-gray-300 md:text-lg">
              Handyman Services: We also offer reliable handyman services, addressing various
              maintenance and repair needs with precision and professionalism. Our skilled
              technicians are equipped to handle a wide range of tasks, ensuring your property
              remains in excellent condition.
            </p>

            <div class="flex items-center mt-6">
              <div class="mx-2">
                <h1 class="text-sm text-gray-700 dark:text-gray-200">Emmanuel Obuobi</h1>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Founder/Chief Executive Officer
                </p>
              </div>
            </div>
          </div>

          <img
            class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96 lg:mt-0 mt-10"
            src="/assets/images/Placeholder.png"
            alt=""
          />
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'
</script>

<style scoped></style>
