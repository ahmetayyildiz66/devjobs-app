<template>
  <button class="btn" :class="[mode]">
    <slot>Button</slot>
  </button>
</template>

<script lang="ts" setup>
interface Props {
  dark?: boolean;
  primary?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  primary: true,
  dark: false,
});

const mode = props.primary && "!bg-blue-550 !text-white hover:!bg-blue-650";
</script>

<style scoped>

.btn {
  @apply sm:px-4 md:px-9 py-3 rounded-md bg-gray-250  text-blue-550 font-bold hover:bg-blue-350 hover:text-blue-550 transition-colors duration-300;
}
</style>
