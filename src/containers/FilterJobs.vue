<template>
  <div class="h-20 bg-white dark:bg-black-50 rounded-md -translate-y-1/2 flex">
    <div class="border-r dark:border-r-gray-650 w-full relative">
      <IconSearch class="absolute top-0 left-8 md:left-6 lg:left-8 bottom-0 my-auto" />
      <DjInput placeholder="Filter by title, companies, expertise.." class="pl-[72px]" />
    </div>
    <div class="border-r dark:border-r-gray-650 w-full relative">
      <IconLocation class="absolute top-0 left-8 md:left-6 lg:left-8 bottom-0 my-auto" />
      <DjInput placeholder="Filter by location.." class="pl-[72px]"/>
    </div>
    <div class="min-w-[280px] lg:w-full flex items-center">
      <DjCheckbox class="ml-5 md:ml-5 lg:ml-8 hidden lg:flex" label-text="Full Time Only" />
      <DjCheckbox class="ml-5 md:ml-5 lg:ml-8 block lg:hidden" label-text="Full Time" />
      <DjButton class="ml-6">Search</DjButton>
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
