<template>
  <section class="py-5 md:py-10">
    <div class="container">
      <SectionHeader
        title="Our Trusted Partners"
        subTitle="Explore the comprehensive services Oris Express has to offer"
      />
      <div class="bg-white py-24 sm:py-12">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
          >
            <img
              class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
              width="158"
              height="48"
            />
            <img
              class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
              width="158"
              height="48"
            />
            <img
              class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
              width="158"
              height="48"
            />
            <img
              class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
              width="158"
              height="48"
            />
            <img
              class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
              width="158"
              height="48"
            />
          </div>
        </div>
      </div>

      <!-- <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div>
      <Carousel
        class="relative w-full max-w-xl"
        :opts="{
          align: 'end'
        }"
        :plugins="[
          Autoplay({
            delay: 2000
          })
        ]"
      >
        <CarouselContent>
          <CarouselItem class="md:basis-1/2 lg:basis-1/2 pl-5">
            <div class="p-1">
              <Card>
                <CardContent class="flex aspect-square items-center justify-center">
                  <img
                    class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                    alt="Transistor"
                    width="158"
                    height="48"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem class="md:basis-1/2 lg:basis-1/2">
            <div class="p-1">
              <Card>
                <CardContent class="flex aspect-square items-center justify-center p-6">
                  <img
                    class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                    src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                    alt="SavvyCal"
                    width="158"
                    height="48"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem class="md:basis-1/2 lg:basis-1/2">
            <div class="p-1">
              <Card>
                <CardContent class="flex aspect-square items-center justify-center p-6">
                  <img
                    class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                    src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                    alt="Statamic"
                    width="158"
                    height="48"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem class="md:basis-1/2 lg:basis-1/2">
            <div class="p-1">
              <Card>
                <CardContent class="flex aspect-square items-center justify-center p-6">
                  <img
                    class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                    alt="Reform"
                    width="158"
                    height="48"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
       <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </div> -->
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import Autoplay from 'embla-carousel-autoplay'
import ServicesCard3 from './ServicesCard3.vue'
import SectionHeader from './SectionHeader.vue'
</script>

<style scoped></style>
