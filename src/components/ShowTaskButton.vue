<template>
  <div class="flex items-start justify-end">
    <div
      class="max-w-lg border whitespace-pre-wrap text-xs p-2 transition-all mt-11 absolute"
      :class="[isHide ? 'hidden-text' : 'show-text']"
    >
      <slot name="text"></slot>
    </div>

    <button
      class="transition-all border border-black text-black p-2 hover:bg-black hover:text-white"
      @click="switchHidden"
    >
      {{ showHideText }} task text
    </button>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";

const isHide = ref(false);
const switchHidden = () => {
  isHide.value = !isHide.value;
};
const showHideText = computed(() => {
  return isHide.value ? "Show" : "Hide";
});
</script>

<style scoped>
.hidden-text {
  @apply hidden opacity-0 -right-3/4;
}
.show-text {
  @apply opacity-100 right-3;
}
/* .overflow {
  @apply overflow-x-hidden;
} */
</style>
