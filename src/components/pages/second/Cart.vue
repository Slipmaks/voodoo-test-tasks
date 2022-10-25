<template>
  <div class="bg-slate-300 w-56 p-4 bg-opacity-80">
    <div v-if="!storeStatus">
      <p>Cart empty</p>
    </div>
    <div v-for="item in store.cart.items" :key="item.id" class="my-2 relative">
      <p
        v-if="item.message"
        class="absolute text-center ml-auto mr-auto left-0 right-0 top-3 font-semibold text-cyan-200"
      >
        {{ item.message }}
      </p>
      <img :src="item.img" alt="img" />
      <p>Choose wrapper</p>
      <div>
        <Wrapper :gift-id="item.id" />
      </div>
    </div>
    <div v-if="storeStatus">
      <p>Delivery date:</p>
      <flatPickr
        v-model="date"
        :config="config"
        placeholder="Select date"
        @on-change="setDate"
        class="outline-none bg-white bg-opacity-60 hover:bg-opacity-100 w-24 text-center"
      />
    </div>
    <button v-if="store.cart.deliveryDate" @click="submit">Submit</button>
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

const submit = () => {
  store.submit();
};
</script>
