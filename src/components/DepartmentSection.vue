<template>
    <section class="py-16 md:pt-10 bg-accent">
        <div class="container">
            <SectionHeader
                title="Our Departments"
                subTitle="Check out what we are about in our areas of specialty"
            />
            <DepartmentList />
        </div>
    </section>
</template>

<script setup lang="ts">
import SectionHeader from "./SectionHeader.vue";
import DepartmentList from "./DepartmentList.vue";
</script>

<style scoped></style>
