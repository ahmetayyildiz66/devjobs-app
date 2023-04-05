<template>
  <div class="flex items-center space-x-4">
    <IconSun />
    <DjSwitch :model-value="isDark" @update:model-value="toggleDark" :is-checked="isDark" />
    <IconMoon />
  </div>
</template>

<script lang="ts" setup>
// localStorage
import { useDark, useToggle } from "@vueuse/core"

// imports
import DjSwitch from '../components/DjSwitch.vue';
import IconMoon from '../components/icons/IconMoon.vue';
import IconSun from '../components/icons/IconSun.vue';



const isDark = useDark()
const toggleDark = useToggle(isDark)

</script>
