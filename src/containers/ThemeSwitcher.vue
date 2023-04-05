<template>
  <div class="flex items-center space-x-4">
    <IconSun />
    <DjSwitch v-model="switchToggle" />
    <IconMoon />
  </div>
</template>

<script lang="ts" setup>
// ref
import { ref, watch } from "vue"

import DjSwitch from '../components/DjSwitch.vue';
import IconMoon from '../components/icons/IconMoon.vue';
import IconSun from '../components/icons/IconSun.vue';


const switchToggle = ref(false)

watch(switchToggle, () => {
  console.log('toggleable: ', switchToggle.value)
})
</script>
