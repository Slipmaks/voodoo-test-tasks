<template>
  <div>
    <h2>First task</h2>
    <ShowTaskButton>
      <template v-slot:text><Description /></template>
    </ShowTaskButton>
  </div>
  <div>
    <Section></Section>
  </div>
</template>

<script setup>
import ShowTaskButton from "../../ShowTaskButton.vue";
import Section from "./Section.vue";
import Description from "./Description.vue";
</script>

<style></style>
