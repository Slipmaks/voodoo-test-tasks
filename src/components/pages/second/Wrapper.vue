<template>
  <div class="flex flex-wrap">
    <div v-for="item in store.wrappers">
      <div class="relative">
        <img :src="item.img" class="w-12" />
        <input
          class="absolute top-0 left-0"
          type="radio"
          v-model="checkboxWrapper"
          :value="item.id"
          @change="updateWrapper"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useStore } from "../../../store";
const props = defineProps(["giftId"]);
const store = useStore();
const checkboxWrapper = ref(0);
const updateWrapper = () => {
  store.setGiftWrapper(props.giftId, checkboxWrapper.value);
};
</script>
