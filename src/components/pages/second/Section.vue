<template>
  <div class="max-w-xl bg-slate-300">
    <p>hello</p>
    <div v-if="store.items" class="flex gap-4 justify-center items-center">
      <Item
        v-for="item in store.items"
        :key="item.id"
        :item="item.id"
        :img="item.img"
        :title="item.title"
      />
    </div>
  </div>
</template>
<script setup>
import Item from "./Item.vue";
import { useStore } from "../../../store";
const store = useStore();
</script>
