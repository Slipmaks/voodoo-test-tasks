<template>
  <div class="max-w-xl bg-slate-200 relative">
    <div v-if="store.items" class="flex gap-4 justify-center items-center">
      <Item
        v-for="item in store.items"
        :key="item.id"
        :item-id="item.id"
        :img="item.img"
        :title="item.title"
        :message="item.message"
      />
    </div>
    <img
      src="/src/assets/cart.svg"
      alt="cart"
      class="w-8 absolute right-2 top-2 cursor-pointer"
      @click="cartHandler"
    />

    <div v-if="cartIsOpen" class="absolute right-10 top-10 min-w-xs min-h-xs">
      <Cart />
    </div>
  </div>
</template>
<script setup>
import Item from "./Item.vue";
import { useStore } from "../../../store";
import Cart from "./Cart.vue";
import { ref } from "vue";
const store = useStore();

const cartIsOpen = ref(false);
const cartHandler = () => {
  cartIsOpen.value = !cartIsOpen.value;
};
</script>
