<template>
  <div class="bg-slate-300">
    <flatPickr v-model="date" :config="config" placeholder="Select date" />
    <p>{{ date }}</p>
  </div>
</template>

<script setup>
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import { ref } from "vue";
const cart = ref([]);
const date = ref(null);

const config = {
  minDate: "today",
  disable: [
    function (date) {
      return date.getDay() === 0 || date.getDay() === 6;
    },
  ],
  locale: {
    firstDayOfWeek: 1,
  },
};
</script>
