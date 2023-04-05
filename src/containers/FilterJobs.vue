<template>
  <div class="h-20 bg-white dark:bg-black-50 rounded-md -translate-y-1/2 flex">
    <div class="md:border-r md:dark:border-r-gray-650 w-full relative">
      <IconSearch class="absolute top-0 left-8 md:left-6 lg:left-8 bottom-0 my-auto" :fill="'#5964E0'" />
      <DjInput placeholder="Filter by title, companies, expertise.." class="sm:pl-[72px] md:pl-[60px] lg:pl-[72px] sm:max-w-[186px] md:max-w-full" />
    </div>
    <div class="border-r sm:hidden md:flex dark:border-r-gray-650 w-full relative">
      <IconLocation class="absolute top-0 left-8 md:left-6 lg:left-8 bottom-0 my-auto" />
      <DjInput placeholder="Filter by location.." class="lg:pl-[72px] md:pl-[50px]"/>
    </div>
    <div class="md:w-full flex items-center">
      <DjCheckbox class="ml-5 md:ml-5 lg:ml-8 hidden lg:flex" label-text="Full Time Only" />
      <DjCheckbox class="sm:hidden md:flex md:ml-5 lg:ml-8 flex lg:hidden" label-text="Full Time" />
      <DjButton class="md:ml-6 sm:ml-auto sm:mr-4">
        <span class="hidden md:block">Search</span>
        <IconSearch class="md:hidden" :fill="'#fff'" />
      </DjButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import DjInput from '../components/DjInput.vue';
import DjCheckbox from '../components/DjCheckbox.vue';
import DjButton from '../components/DjButton.vue';

// icons
import IconSearch from '../components/icons/IconSearch.vue';
import IconLocation from '../components/icons/IconLocation.vue';
</script>
