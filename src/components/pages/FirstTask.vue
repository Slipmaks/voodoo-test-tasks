<template>
  <div>
    <h2>First task</h2>
    <div class="flex items-start justify-end">
      <pre
        class="max-w-lg border whitespace-pre-wrap text-xs p-2"
        :class="[isHide ? 'hidden-text' : 'show-text']"
      >
Description: 
Need to create Section with card grid. 
Section will have N items (can be added in customise 1-8 blocks.) 
  -Grid items gap
    -Select gap (range settings (slider))
  -Need to have ability to edit section title
    -Size
    -Color
  -Need to have ability to edit section description
    -Select color
  -Button
    -Link (if empty do not show button)
    -Text (if empty do not show button)
    -Button color 
    -Text color
  -Need to have ability to make section as slider 
  -Block description
    -Be able to select block width ( 25%, 50%, 75%, 100% )
    -Be able to select block height ( 300, 400, 500, 600px, 100vh )
    -Be able to select background color image
  -Select background image overlay: 
    -Color
    -Overlay opacity
If there are 2+ blocks need to align correctly https://prnt.sc/OnZMjE6tCr0s</pre
      >
      <button class="border border-slate-500 p-2" @click="switchHidden">
        Show task text
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const isHide = ref(true);
const switchHidden = () => {
  isHide.value = !isHide.value;
  console.log(isHide.value);
};
</script>

<style>
.hidden-text {
  @apply hidden transition-all opacity-0 mt-0;
}
.show-text {
  @apply transition-all opacity-100 mt-11;
}
</style>
