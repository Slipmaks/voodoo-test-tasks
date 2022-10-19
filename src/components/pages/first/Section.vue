<template>
  <div class="wrapper">
    <div class="section">
      <div class="flex items-center flex-col">
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
        <p
          @click="editDescription(true)"
          v-if="!showDescriptionInput"
          :style="{ color: sectionDescriptionColor }"
        >
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
      <div
        v-if="!asCarousel"
        class="flex flex-wrap justify-center items-center relative w-full"
        :style="{ gap: blockGap + 'px' }"
      >
        <TheBlock v-for="item in itemsCount" :key="item"></TheBlock>
      </div>
      <div v-if="asCarousel" class="w-full px-5">
        <Carousel class="w-full" :settings="settings">
          <Slide class="w-full" v-for="item in itemsCount" :key="item">
            <TheBlock />
          </Slide>
          <template #addons>
            <Pagination />
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
    <div class="global-settings">
      <div>
        <p>N items(between 1-8)</p>
        <input type="number" min="1" max="8" v-model="itemsCount" />
      </div>
      <div>
        <p>Gap between blocks</p>
        <input type="range" min="0" max="18" v-model="blockGap" />
      </div>
      <div>
        <p>Section title text size</p>
        <input type="number" v-model="sectionTitleSize" />
      </div>
      <div>
        <p>Section title color</p>
        <input type="text" v-model="sectionTitleColor" />
      </div>
      <div>
        <p>Section description color</p>
        <input type="text" v-model="sectionDescriptionColor" />
      </div>
      <div>
        <p>Display as slider</p>
        <input type="checkbox" v-model="asCarousel" />
      </div>
    </div>
  </div>
</template>
<script setup>
import "vue3-carousel/dist/carousel.css";
import { ref } from "vue";
import TheBlock from "./TheBlock.vue";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";

const title = ref("Edit title");
const description = ref("Edit description");
const titleInput = ref(null);
const descriptionInput = ref(null);
const showTitleInput = ref(false);
const showDescriptionInput = ref(false);
const sectionTitleSize = ref("16");
const sectionTitleColor = ref("black");
const sectionDescriptionColor = ref("black");
const blockGap = ref(8);
const itemsCount = ref(3);
const asCarousel = ref(false);
const settings = {
  itemsToShow: 1,
  wrapAround: true,
  transition: 600,
};

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
