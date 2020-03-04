<template>
  <div id="app" class="inventory">
    <inventory />
  </div>
</template>

<script>
import Inventory from "./components/Inventory";
import MyComponent from "./components/MyComponent";

export default {
  name: "App",

  components: { Inventory, MyComponent }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
