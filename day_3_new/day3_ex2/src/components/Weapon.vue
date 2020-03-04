<template>
  <inventory-item>
    <template slot="header">{{ name }}</template>
    <template slot="body">{{ image }}</template>
    <template slot="footer">
      <small>dps: {{ dps }}</small>
      <small>ammo: {{ ammo }}</small>
    </template>
  </inventory-item>
</template>

<script>
import InventoryItem from "./InventoryItem";

export default {
  name: "Weapon",

  components: {
    InventoryItem
  },

  props: {
    name: String,
    image: String,
    dps: Number,
    ammo: Number
  }
};
</script>

<style lang="scss" scoped>
@import "./InventoryItem", "./Selectable";
</style>