<template>
  <div>
    <h2>Fourth Task</h2>
    <ShowTaskButton>
      <template v-slot:text>
        <pre>
Additional product added to cart. https://prnt.sc/HVshXE02GuX3
Make block on product page with checkbox. 
If check box is selected once user add main product
to cart additional product added as well.

  1.On product page create metafield - list of products
  2.In product Create metafield - limit of addons.
This field used to specify maximum qty of all addon
items can be added with one product.
  3.On product page output all of this fields and
add to cart as manu selected 
  4.Above add to cart button need to calculate total
price (main product + addons)
  5.All changes should be applied to new product
page template called “addon-product”
https://giftbar.pl/collections/balony-1/products/zestaw-44</pre
        >
      </template>
    </ShowTaskButton>
  </div>
</template>
<script setup>
import ShowTaskButton from "../../ShowTaskButton.vue";
</script>
