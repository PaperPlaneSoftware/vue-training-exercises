<template>
    <div class="chart">
        <div class="bar" v-for="(val, i) in value" :key="i" :style="{height: `${val.value}px`}"></div>
    </div>
</template>

<script>
export default {
    name: 'DataChart',
    props: { value: Array }
}
</script>

<style scoped>
.chart {
    display: flex;
    flex-direction: row;

    align-items: flex-end;
    justify-content: space-between;

    height: 200px;
    min-width: 200px;

    border-left: 1px solid #3e3e3e;
    border-bottom: 1px solid #3e3e3e;
}
.bar {
    width: 16px;
    margin-right: 8px;
    border: 1px solid #3e3e3e;
    background-color: aquamarine;
}
</style>
