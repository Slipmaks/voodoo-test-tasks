<template>
  <div
    class="items-end justify-center relative overflow-hidden transition-all"
    :style="{
      height: heightProp,
      width: widthProp + '%',
      background: colorProp,
    }"
    @mouseenter="showPanel()"
    @mouseleave="hidePanel()"
  >
    <div>
      <img :src="imgProp" />
      <div
        class="overlay"
        :style="{ background: overlayColor, opacity: opacityProp }"
      >
        hello
      </div>
    </div>

    <div
      class="flex justify-center flex-wrap gap-1 content-center z-100 absolute -bottom-96 transition-all"
      :class="{ show: panelIsHiden }"
    >
      <div class="flex flex-wrap content-center justify-center">
        <p class="mr-1">Block width:</p>
        <select @change="chngBlockWidth($event)">
          <option value="25">25%</option>
          <option value="50">50%</option>
          <option value="75">75%</option>
          <option value="100">100%</option>
        </select>
      </div>
      <div class="flex flex-wrap content-center justify-center">
        <p class="mr-1">Block height</p>
        <select @change="chngBlockHeight($event)">
          <option value="300px">300px</option>
          <option value="400px">400px</option>
          <option value="500px">500px</option>
          <option value="600px">600px</option>
          <option value="100vh">100vh</option>
        </select>
      </div>

      <div class="flex" v-if="!imgProp">
        <p class="mr-1">Color:</p>
        <input
          type="color"
          value="colorProp"
          @change="chngBlockColor($event)"
        />
      </div>
      <div class="flex flex-col" v-if="imgProp">
        <div>
          <p>Overlay color:</p>
          <input type="color" @change="chngOverlayColor($event)" />
        </div>
        <div>
          <p>Overlay opacity</p>
          <input
            type="range"
            min="10"
            max="100"
            @change="chngOverlayOpacity($event)"
          />
        </div>
      </div>

      <div>
        <label :for="idProp + '-input'"
          >Browse...
          <input
            :id="idProp + '-input'"
            class="upload-photo"
            type="file"
            ref="imgInput"
            @change="handleFileUpload(idProp)"
          />
        </label>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useStore } from "../../../store";

const props = defineProps([
  "idProp",
  "imgProp",
  "colorProp",
  "heightProp",
  "widthProp",
  "opacityProp",
  "overlayColor",
]);
props.colorProp;
props.widthProp;
props.heightProp;

const store = useStore();
const src = ref(null);
const imgInput = ref("");
let panelIsHiden = ref(false);

const handleFileUpload = (id) => {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    src.value = reader.result;

    store.setImage(id, src.value);
  });
  reader.readAsDataURL(imgInput.value.files[0]);
};
const showPanel = () => {
  panelIsHiden.value = true;
};
const hidePanel = () => {
  panelIsHiden.value = false;
};
const chngBlockWidth = (event) => {
  store.changeWidth(props.idProp, event.target.value);
};
const chngBlockHeight = (event) => {
  store.changeHeight(props.idProp, event.target.value);
};
const chngBlockColor = (event) => {
  store.changeColor(props.idProp, event.target.value);
};
const chngOverlayColor = (event) => {
  store.changeOverlayColor(props.idProp, event.target.value);
};
const chngOverlayOpacity = (event) => {
  store.changeOverlayOpacity(props.idProp, event.target.value / 100);
};
</script>
<style scoped>
select {
  background-color: transparent;
}
.upload-photo {
  opacity: 0;
  position: absolute;
  z-index: -1;
}
label {
  cursor: pointer;
}
.show {
  @apply bottom-0;
}
.overlay {
  @apply absolute w-full h-full top-0 left-0;
}
</style>
