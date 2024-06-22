<template>
    <div
        class="w-full bg-center bg-cover h-[10rem]"
        style="
            background-image: url('https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80');
        "
    >
        <div
            class="flex items-center justify-center w-full h-full bg-gray-900/40"
        >
            <div class="text-center">
                <h1 class="text-3xl font-semibold text-white lg:text-4xl">
                    {{ title }}
                </h1>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
}>();
</script>

<style scoped></style>
