<template>
  <div
    class="items-end justify-center relative"
    :style="{
      height: height,
      width: blockWidth + '%',
      background: color,
    }"
  >
    <div v-if="src">
      <img :src="src" alt="Image" />
    </div>

    <div class="flex justify-center flex-wrap gap-1 content-center z-10">
      <div class="flex flex-wrap content-center justify-center">
        <p class="mr-1">Block width:</p>
        <select v-model="blockWidth">
          <option value="25">25%</option>
          <option value="50">50%</option>
          <option value="75">75%</option>
          <option value="100">100%</option>
        </select>
      </div>
      <div class="flex flex-wrap content-center justify-center">
        <p class="mr-1">Block height</p>
        <select v-model="height">
          <option value="300px">300px</option>
          <option value="400px">400px</option>
          <option value="500px">500px</option>
          <option value="600px">600px</option>
          <option value="100vh">100vh</option>
        </select>
      </div>

      <div class="flex">
        <p class="mr-1">Color:</p>
        <input type="color" v-model="color" />
      </div>
      <div>
        <label for="upload-photo">Browse...</label>
        <input
          id="upload-photo"
          type="file"
          ref="img"
          v-on:change="handleFileUpload()"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const blockWidth = ref(25);
const height = ref("300px");
const color = ref("#fafafa");
const src = ref("");
const img = ref(null);

const handleFileUpload = () => {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    src.value = reader.result;
    console.log(src.value);
    debugger;
  });
  reader.readAsDataURL(img.value.files[0]);
};
</script>
<style scoped>
select {
  background-color: transparent;
}
#upload-photo {
  opacity: 0;
  position: absolute;
  z-index: -1;
}
label {
  cursor: pointer;
}
</style>
