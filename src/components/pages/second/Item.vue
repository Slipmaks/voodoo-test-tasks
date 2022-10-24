<template>
  <div class="w-28">
    <input
      type="text"
      class="w-28"
      placeholder="Enter message"
      v-model="currentMsg"
      @keydown.enter="submit"
    />
    <div class="relative">
      <p class="absolute bottom-0">{{ title }}</p>
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
import { maxLength, alphaNum } from "@vuelidate/validators";

const props = defineProps(["item", "img", "title"]);
const currentMsg = ref("Congrats!");
const rules = { maxLength: maxLength(35), alphaNum };

const v$ = useVuelidate(rules, currentMsg);
const submit = async () => {
  const result = await v$.value.$validate();
  if (result) {
    alert("succeful");
  } else {
    alert("Only letters and numbers, not more than 35 characters");
  }
};
</script>
