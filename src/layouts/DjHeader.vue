<template>
  <header class="lg:max-w-[1440px] mx-auto lg:h-[162px]">
    <img
      src="../assets/headerBg.png"
      alt="Devjobs background"
      class="w-full h-full"
    />
    <div class="container mx-auto bg-red-300 -mt-[97px] flex items-center justify-between">
      <img
        src="../assets/devjobs.png"
        alt="Devjobs logo"
      />
      <ThemeSwitcher />
    </div>
  </header>
</template>

<script lang="ts" setup>
import ThemeSwitcher from '../containers/ThemeSwitcher.vue';
</script>
