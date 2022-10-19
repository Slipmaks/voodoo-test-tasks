<template>
  <div>
    <h2>Second Task</h2>
    <ShowTaskButton>
      <template v-slot:text><Description /></template>
    </ShowTaskButton>
  </div>
</template>
<script setup>
import ShowTaskButton from "../../ShowTaskButton.vue";
import Description from "./Description.vue";
</script>
