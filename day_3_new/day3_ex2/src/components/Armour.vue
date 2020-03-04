<template>
  <inventory-item>
    <template slot="header">{{ name }}</template>
    <template slot="body">{{ image }}</template>
    <template slot="footer">
      <small>ar: {{ rating }}</small>
      <small>weight: {{ weight }}</small>
    </template>
  </inventory-item>
</template>

<script>
import InventoryItem from "./InventoryItem";

export default {
  name: "Armour",

  components: {
    InventoryItem
  },

  props: {
    name: String,
    image: String,
    rating: Number,
    weight: Number
  }
};
</script>

<style lang="scss" scoped>
@import "./InventoryItem", "./Selectable";
</style>