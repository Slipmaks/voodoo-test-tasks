<template>
  <div>
    <h2>Third Task</h2>
    <ShowTaskButton>
      <template v-slot:text>
        <pre>
Description: 
Product linked colors. On product page need to
create block with all available colors.
https://prnt.sc/oc2pgr9-3kCu
Each color as a separate product.
On click we need to open a linked product. 
On collection page just show all available colors.
https://prnt.sc/joXmGQ9NpEXK
Example - https://rdnt.store/products/white-naked-bodysoul
</pre
        >
      </template>
    </ShowTaskButton>
  </div>
  <!-- <div>
    <Carousel>
      <Slide></Slide>
    </Carousel>
  </div> -->
</template>
<script setup>
import ShowTaskButton from "../../ShowTaskButton.vue";
import { Carousel, Slide } from "vue-carousel";
</script>
