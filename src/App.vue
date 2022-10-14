<template>
  <TheHeader />
  <div class="flex gap-4 align-middle justify-center text-slate-400">
    <RouterLink to="/">First task</RouterLink>
    <RouterLink to="/second-task">Second task</RouterLink>
  </div>

  <RouterView></RouterView>
</template>

<style scoped></style>

<script setup>
import TheHeader from "./components/TheHeader.vue";
</script>
