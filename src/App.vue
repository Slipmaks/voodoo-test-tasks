<template>
  <TheHeader />
  <div class="flex gap-4 align-middle justify-center text-slate-400">
    <RouterLink to="/">First task</RouterLink>
    <RouterLink to="/second-task">Second task</RouterLink>
    <RouterLink to="/third-task">Third task</RouterLink>
    <RouterLink to="/fourth-task">Fourth task</RouterLink>
  </div>

  <div class="wrapper">
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.wrapper {
  @apply px-3;
}
a {
  @apply hover:border-b-2;
}
.router-link-exact-active {
  @apply border-b-2;
}
</style>

<script setup>
import TheHeader from "./components/TheHeader.vue";
</script>
