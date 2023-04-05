<template>
  <div class="py-7 px-8">
    <input type="text" :placeholder="placeholder" class="placeholder:text-gray-550 placeholder:text-sm focus:outline-none w-full bg-transparent" />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  placeholder: {
    type: String,
    required: true
  }
})
</script>