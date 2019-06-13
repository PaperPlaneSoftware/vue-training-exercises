<template>
  <div id="app">
    <card>
      <template slot="header">
        <span>🖖</span> <span class="title">Live Long and Prosper</span>
        <hr/>
      </template>
      <template slot="body">
        Some profound Vulcan saying...
      </template>
    </card>
  </div>
</template>

<script>
import Card from './components/Card';

export default {
  name: 'app',
  components: { Card }
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