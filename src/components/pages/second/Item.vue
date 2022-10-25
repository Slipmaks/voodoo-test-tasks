<template>
  <div class="w-36 my-2">
    <input
      type="text"
      class="w-36 outline-none"
      placeholder="Enter message"
      v-model="currentMsg"
      @keydown.enter="submit"
    />
    <div class="relative">
      <p
        v-if="message"
        class="absolute text-center ml-auto mr-auto left-0 right-0 top-3 font-semibold text-cyan-200"
      >
        {{ message }}
      </p>
      <img :src="img" />
      <p
        class="text-center cursor-pointer bg-slate-100 hover:bg-slate-50"
        @click="addToCart(itemId, img, title, message)"
      >
        Add "{{ title }}" to cart
      </p>
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
    currentMsg.value = "";
  } else {
    alert("Only letters and numbers, not more than 35 characters");
  }
};
const addToCart = (id, img, title, message) => {
  const itemCart = {
    id: id,
    img: img,
    title: title,
    message: message,
    wrapper: null,
  };
  store.cart.items.push(itemCart);
  console.log(store.cart);
};
</script>
