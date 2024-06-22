<template>
    <div :class="props.divClass">
        <h1
            :class="
                cn(
                    'text-3xl text-center font-light text-gray-800 dark:text-white md:text-4xl lg:text-5xl',
                    props.class
                )
            "
        >
            {{ title }}
        </h1>
        <p
            :class="
                cn(
                    'mt-4 text-center text-sm font-light text-gray-500 dark:text-gray-300',
                    props.classSub
                )
            "
        >
            {{ subTitle }}
        </p>
    </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
    title: string;
    subTitle: string;
    class?: HTMLAttributes["class"];
    classSub?: HTMLAttributes["class"];
    divClass?: HTMLAttributes["class"];
}>();
</script>

<style scoped></style>
