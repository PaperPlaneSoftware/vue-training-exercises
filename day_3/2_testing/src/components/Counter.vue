<template>
  <div class="counter-container">
    <button @click="dec">-</button>
    <span>{{ count }}</span>
    <button @click="inc">+</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: { 
    initCount: {
      type: Number,
      default: 42
    }
  },
  data: function() {
    return {
      count: this.initCount
    }
  },
  methods: {
    inc: function() {
      this.count++;
    },
    dec: function() {
      this.count--
    }
  }
}
</script>

<style scoped>
  .counter-container {
    display: flex;
    width: 200px;
    justify-content: space-between;
    border: 1px solid black;
  }

  .counter-container > span {
    width: 100px;
    text-align: center;
    font-size: 18pt;
    font-weight: bold;
  }
</style>
