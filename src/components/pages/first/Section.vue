<template>
  <div class="wrapper">
    <div class="section">
      <div class="flex items-center flex-col my-2">
        <h2
          class="font-black"
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
          class="outline-none bg-slate-300"
          type="text"
          ref="titleInput"
          v-if="showTitleInput"
          @keydown.enter="setTitle"
          @blur="editTitle(false)"
          v-focus
        />
        <p
          @click="editDescription(true)"
          v-if="!showDescriptionInput"
          :style="{ color: sectionDescriptionColor }"
        >
          {{ description }}
        </p>
        <input
          class="outline-none bg-slate-300"
          type="text"
          ref="descriptionInput"
          v-if="showDescriptionInput"
          @keydown.enter="setDescription"
          @blur="editDescription(false)"
          v-focus
        />
      </div>
      <div
        v-if="!asCarousel && store.theBlocks.length"
        class="flex flex-wrap justify-center items-center relative w-full"
        :style="{ gap: blockGap + 'px' }"
      >
        <TheBlock
          v-for="item in store.theBlocks"
          :key="item.id"
          :id-prop="item.id"
          :img-prop="item.image.url"
          :color-prop="item.color"
          :height-prop="item.height"
          :width-prop="item.width"
          :opacity-prop="item.image.overlayOpacity"
          :overlay-color="item.image.overlayColor"
        ></TheBlock>
      </div>
      <div v-if="asCarousel && store.theBlocks.length" class="w-full px-5">
        <Carousel class="w-full" :settings="settings">
          <Slide class="w-full" v-for="item in store.theBlocks" :key="item.id">
            <TheBlock
              :id-prop="item.id"
              :img-prop="item.image.url"
              :color-prop="item.color"
              :height-prop="item.height"
              :width-prop="item.width"
              :opacity-prop="item.image.overlayOpacity"
              :overlay-color="item.image.overlayColor"
            />
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
        <p>{{ store.theBlocks.length }} items (between 1-8)</p>

        <button class="btn" @click="displayBlock">Add item</button>
        <button class="btn" @click="hideBlock">Delete item</button>
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
import { useStore } from "../../../store";

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
const asCarousel = ref(false);
const settings = {
  itemsToShow: 1,
  wrapAround: true,
  transition: 600,
  mouseDrag: false,
  touchDrag: false,
};
const store = useStore();

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
const displayBlock = () => {
  store.createBlock();
};
const hideBlock = () => {
  store.deleteBlock();
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
.btn {
  @apply transition-all bg-slate-200 p-1 mx-1 hover:bg-slate-50;
}
</style>
