<template>
  <div
    class="container"
    :class="cssClass"
    @mouseover="toggleHover"
    @mouseout="toggleHover"
    @click="toggleSelect"
  >
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="body">
      <slot name="body"></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import Selectable from "./Selectable";

export default {
  name: "InventoryItem",
  mixins: [Selectable]
};
</script>

<style lang="scss" scoped>
@import "./InventoryItem";
</style>