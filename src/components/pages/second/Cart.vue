<template>
  <div class="bg-slate-300 w-56 p-4 bg-opacity-80">
    <div v-if="!storeStatus">
      <p>Cart empty</p>
    </div>
    <div v-for="item in store.cart.items" :key="item.id" class="my-2">
      <img :src="item.img" alt="img" />
      <p>Choose wrapper</p>
      <div class="flex flex-wrap">
        <div v-for="item in store.wrappers">
          <div class="relative">
            <img :src="item.img" class="w-12" />
            <input
              class="absolute top-0 left-0"
              type="radio"
              v-model="checkboxWrapper"
              :value="item.id"
            />
          </div>
        </div>
        <!-- <Wrapper
          v-for="item in store.wrappers"
          :key="item.id"
          :img="item.img"
          :wrapper-id="item.id"
          v-model="checkboxWrapper"
        /> -->
      </div>
    </div>
    <div>
      <p>Delivery date:</p>
      <flatPickr
        v-model="date"
        :config="config"
        placeholder="Select date"
        @on-change="setDate"
        class="outline-none bg-white bg-opacity-60 hover:bg-opacity-100 w-50"
      />
    </div>
  </div>
</template>

<script setup>
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import { ref, computed } from "vue";
import { useStore } from "../../../store";
import Wrapper from "./Wrapper.vue";

const store = useStore();
const date = ref(null);
const checkboxWrapper = ref(0);

const config = {
  minDate: new Date().fp_incr(2),
  disable: [
    function (date) {
      return date.getDay() === 0 || date.getDay() === 6;
    },
  ],
  locale: {
    firstDayOfWeek: 1,
  },
};
const setDate = () => {
  date.value;
  store.setDeliverydate(date.value);
  console.log(store.cart);
};
const storeStatus = computed(() => store.cart.items.length);
</script>
