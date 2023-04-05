<template>
  <div class="h-20 bg-white rounded-md -translate-y-1/2 flex">
    <div class="border-r w-full relative">
      <IconSearch class="absolute top-0 left-8 bottom-0 my-auto" />
      <DjInput placeholder="Filter by title, companies, expertise.." class="pl-[72px]" />
    </div>
    <div class="border-r w-full relative">
      <IconLocation class="absolute top-0 left-6 bottom-0 my-auto" />
      <DjInput placeholder="Filter by location.." class="pl-[56px]"/>
    </div>
    <div class="w-full flex items-center">
      <DjCheckbox class="ml-8" label-text="Full Time Only" />
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
