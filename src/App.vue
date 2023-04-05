<template>
  <DjHeader />
  <FilterJobs class="container" />
  <!-- <main class="lg:max-w-[1440px] mx-auto"></main> -->
</template>

<script lang="ts" setup>
import DjHeader from "./layouts/DjHeader.vue"
import FilterJobs from "./containers/FilterJobs.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;500;700&display=swap");

body {
  font-family: "Kumbh Sans", sans-serif;
  background-color: #F4F6F8;
}
</style>
