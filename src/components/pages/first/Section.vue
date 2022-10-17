<template>
  <div class="wrapper">
    <div class="section">
      <h2
        @click="editTitle(true)"
        v-if="!showTitleInput"
        :style="{
          'font-size': sectionTitleSize + 'px',
          color: sectionTitleColor,
        }"
      >
        {{ title }}
      </h2>
      <input
        type="text"
        ref="titleInput"
        v-if="showTitleInput"
        @keydown.enter="setTitle"
        @blur="editTitle(false)"
      />
      <p @click="editDescription(true)" v-if="!showDescriptionInput">
        {{ description }}
      </p>
      <input
        type="text"
        ref="descriptionInput"
        v-if="showDescriptionInput"
        @keydown.enter="setDescription"
        @blur="editDescription(false)"
      />
    </div>
    <div class="global-settings">
      <div>
        <p>N items(between 1-8)</p>
        <input type="number" min="1" max="8" />
      </div>
      <div>
        <p>Gap between blocks</p>
        <input type="range" value="0" min="0" max="10" />
      </div>
      <div>
        <p>Section title text size</p>
        <input type="text" v-model="sectionTitleSize" />
      </div>
      <div>
        <p>Section title color</p>
        <input type="text" v-model="sectionTitleColor" />
      </div>
      <div>
        <p>Section description color</p>
        <input type="text" />
      </div>
      <div>
        <p>Display as slider</p>
        <input type="checkbox" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const title = ref("Edit title");
const description = ref("Edit description");
const titleInput = ref(null);
const descriptionInput = ref(null);
const showTitleInput = ref(false);
const showDescriptionInput = ref(false);
const sectionTitleSize = ref("16");
const sectionTitleColor = ref("#fff");

const editTitle = (val) => {
  showTitleInput.value = val;
};
const setTitle = () => {
  title.value = titleInput.value.value;
  showTitleInput.value = false;
};
const editDescription = (val) => {
  showDescriptionInput.value = val;
};
const setDescription = () => {
  description.value = descriptionInput.value.value;
  showDescriptionInput.value = false;
};
</script>
<style scoped>
.wrapper {
  @apply bg-slate-200 max-w-3xl flex justify-between p-2;
}
.section {
  @apply flex items-center flex-col w-full;
}
.global-settings {
  @apply bg-slate-100 p-2;
}
</style>
