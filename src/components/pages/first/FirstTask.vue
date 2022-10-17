<template>
  <div>
    <h2>First task</h2>
    <ShowTaskButton>
      <template v-slot:text>
        <pre>
Description: 
Need to create Section with card grid. 
Section will have N items (can be added in customise 1-8 blocks.) 
  -Grid items gap
    -Select gap (range settings (slider))
  -Need to have ability to edit section title
    -Size
    -Color
  -Need to have ability to edit section description
    -Select color
  -Button
    -Link (if empty do not show button)
    -Text (if empty do not show button)
    -Button color 
    -Text color
  -Need to have ability to make section as slider 
  -Block description
    -Be able to select block width ( 25%, 50%, 75%, 100% )
    -Be able to select block height ( 300, 400, 500, 600px, 100vh )
    -Be able to select background color image
  -Select background image overlay: 
    -Color
    -Overlay opacity
If there are 2+ blocks need to align correctly https://prnt.sc/OnZMjE6tCr0s</pre
        >
      </template>
    </ShowTaskButton>
  </div>
  <div>
    <Section></Section>
  </div>
</template>

<script setup>
import ShowTaskButton from "../../ShowTaskButton.vue";
import Section from "./Section.vue";
</script>

<style></style>
