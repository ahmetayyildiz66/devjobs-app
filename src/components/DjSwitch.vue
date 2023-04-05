<template>
  <div class="h-6">
    <input type="checkbox" :checked="isChecked" name="themeToggler" id="themeToggler" class="peer hidden" @change="toggleSwitch($event)" />
    <label
      for="themeToggler"
      class="w-12 h-6 inline-block bg-white cursor-pointer relative rounded-full before:hover:bg-blue-650 before:absolute before:transition-all before:duration-300 before:h-3.5 before:w-3.5 before:bg-blue-550 before:m-[5px] before:rounded-full peer-checked:before:translate-x-5"
      />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  isChecked: {
    type: Boolean
  }
})

const emits = defineEmits(["update:modelValue"])

const toggleSwitch = (ev: Event) => {
  const checkbox = ev.target as HTMLInputElement
  emits("update:modelValue", checkbox.checked)
}

</script>
