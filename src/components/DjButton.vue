<template>
  <button class="btn" :class="[mode]">
    <slot>Button</slot>
  </button>
  <span>{{ dark }}</span>
  <span>{{ primary }}</span>
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

const mode = props.primary ? "!bg-red-200 !text-blue-600" : "";
</script>

<style scoped>

.btn {
  @apply px-11 py-3 rounded-md bg-blue-400 text-white;
}
</style>
