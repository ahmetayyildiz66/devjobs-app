<template>
  <header class="max-w-[1440px] mx-auto md:h-[162px] h-[136px]">
    <img
      src="../assets/headerBg.png"
      alt="Devjobs background"
      class="w-full h-full md:block sm:hidden"
    />
    <img
      src="../assets/mobile-headerBg.png"
      alt="Mobile header background"
      class="w-full h-full md:hidden"
    />
    <div class="container mx-auto sm:-mt-[99px] md:-mt-[112px] flex items-center justify-between">
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
