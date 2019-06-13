<template>
  <div id="app">
    <beer name="Kronenburg" :selected.sync="beerSelected" />
    <br />
    <wine name="Merlot" :selected.sync="wineSelected" />
  </div>
</template>

<script>
import Beer from './components/Beer';
import Wine from './components/Wine';

export default {
  name: 'app',
  components: { Beer, Wine },
  data: function() {
    return {
      beerSelected: false,
      wineSelected: false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
