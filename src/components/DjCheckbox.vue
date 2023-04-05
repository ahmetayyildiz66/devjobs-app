<template>
  <div class="flex items-center relative cursor-pointer">
    <input
      type="checkbox"
      :checked="isChecked"
      @change="toggleCheckbox($event)"
      id="checkbox"
      name="checkbox"
      class="hidden peer"
    />
    <label
      for="checkbox"
      class="inline-block h-6 w-6 rounded hover:bg-blue-350 bg-gray-450 peer-checked:bg-blue-550 cursor-pointer"
    />
    <span
      class="cursor-pointer pointer-events-none inline-block rotate-45 absolute left-[8px] top-[3px] h-[14px] w-[8px] border-b-[2px] border-r-[2px] border-b-white border-r-white invisible peer-checked:visible"
    ></span>
    <label for="checkbox" class="ml-4 font-bold cursor-pointer dark:text-white">{{ labelText }}</label>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

defineProps({
  labelText: {
    type: String
  }
})

const isChecked = ref(false);

const toggleCheckbox = (ev: Event) => {
  const checkbox = ev.target as HTMLInputElement;
  isChecked.value = checkbox.checked;
};
</script>
