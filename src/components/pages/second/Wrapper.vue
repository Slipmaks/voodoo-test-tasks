<template>
  <div class="relative">
    <img :src="img" class="w-12" />
    <input
      type="radio"
      :value="wrapperId"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
<script setup>
const props = defineProps(["img", "wrapperId", "modelValue"]);
defineEmits(["update:modelValue"]);
</script>
