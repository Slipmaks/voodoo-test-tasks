<template>
  <div>
    <ShowTaskButton>
      <template v-slot:text><Description /></template>
    </ShowTaskButton>
  </div>
  <Section />
</template>
<script setup>
import ShowTaskButton from "../../ShowTaskButton.vue";
import Description from "./Description.vue";
import Section from "./Section.vue";
</script>
