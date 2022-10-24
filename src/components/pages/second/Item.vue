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
import { maxLength, helpers } from "@vuelidate/validators";

import { noEmoji } from "./regex";
import { useStore } from "../../../store";

const store = useStore();
const props = defineProps(["itemId", "img", "title", "message"]);
const regexEmoji = helpers.regex(noEmoji);
const currentMsg = ref("");
const rules = { maxLength: maxLength(35), regexEmoji };

const v$ = useVuelidate(rules, currentMsg);

const submit = async () => {
  const result = await v$.value.$validate();
  if (result) {
    store.changeMessage(props.itemId, currentMsg.value);
  } else {
    alert("Only letters and numbers, not more than 35 characters");
  }
};
</script>
