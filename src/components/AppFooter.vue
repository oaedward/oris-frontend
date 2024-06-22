<template>
    <section class="bg-primary">
        <div class="container flex flex-col justify-between py-6 sm:flex-row">
            <p class="text-center font-body text-white md:text-left">
                &copy; {{ date }} Oris Express. All rights reserved
            </p>
            <div
                class="flex items-center gap-2 justify-center pt-5 sm:justify-start sm:pt-0 text-white"
            >
                <a href="/">
                    <!-- <Instagram /> -->
                    <Icon icon="fa6-brands:x-twitter" />
                </a>
                <a href="/">
                    <!-- <Twitter /> -->
                    <Icon icon="fa6-brands:instagram" />
                </a>
                <a href="/">
                    <Icon icon="fa6-brands:whatsapp" />
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const date = ref(new Date().getFullYear());
</script>

<style scoped></style>
