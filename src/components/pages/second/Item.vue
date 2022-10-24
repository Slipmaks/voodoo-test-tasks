<template>
  <div class="w-28">
    <input
      type="text"
      class="w-28"
      placeholder="Enter message"
      pattern="[a-zA-Z0-9]+"
      v-model="currentMsg"
      @keydown.enter="submit"
      data-error="Must be alphanumberic"
      data-success="Great!"
    />
    <div class="relative">
      <p class="absolute bottom-0">{{ title }}</p>
      <p v-if="message" class="absolute">{{ message }}</p>
      <img :src="img" />
    </div>
    <span v-for="error in v$.$errors" :key="error.$uid">
      {{ error.$property }} - {{ error.$message }}
    </span>
  </div>
</template>
<script setup>
import { ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { maxLength, alphaNum, required } from "@vuelidate/validators";
import { useStore } from "../../../store";
const store = useStore();
const props = defineProps(["itemId", "img", "title", "message"]);
const currentMsg = ref("");
const rules = { maxLength: maxLength(35), alphaNum };

const v$ = useVuelidate(rules, currentMsg);
const submit = () => {
  store.changeMessage(props.itemId, currentMsg.value);
};
// const submit = async () => {
//   const result = await v$.value.$validate();
//   if (result) {
//     debugger;
//     store.changeMessage(props.itemId, currentMsg.value);
//   } else {
//     alert("Only letters and numbers, not more than 35 characters");
//   }
// };
</script>
