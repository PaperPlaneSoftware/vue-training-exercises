<template>
  <div class="container">
    <h3>Title</h3>
    <div class="slot">
      <slot>no component provided</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyComponent"
};
</script>

<style>
.container {
  border: 2px solid black;
}
.slot {
  border: 1px dashed gray;
}
</style>