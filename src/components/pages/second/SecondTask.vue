<template>
  <div>
    <h2>Second Task</h2>
    <ShowTaskButton>
      <template v-slot:text>
        <pre>
Description: 

We have a personalized gift store.
Each item can be purchased as a gift and need a personalized text on it.
In cart page I need to select order wrapping and preferred delivery date

  1.Need to add line item attributes on product page
    with validation. 
    a.Additional text title - “Enter your message here”
    b.Message limit - 35 symbols. Check text for emojis
    (no emoji is allowed)
  2.Need to add line item attributes on cart page
    with validation. 
    a.Select wrapping - Radio buttons with images
    b.Preferred delivery date is calendar with delivery
    date 2 business days after current day
</pre
        >
      </template>
    </ShowTaskButton>
  </div>
</template>
<script setup>
import ShowTaskButton from "../../ShowTaskButton.vue";
</script>
