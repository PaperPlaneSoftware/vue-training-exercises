<template>
    <div id="app">
        <div class="col">
            <data-table class="mx-2" title="Mega Data Table" v-model="data" @remove="removeDataRow" />
            <data-chart class="mx-2" v-model="data" />
        </div>
    </div>
</template>

<script>
import DataTable from './components/table/DataTable';
import DataChart from './components/DataChart';

export default {
    name: 'app',
    components: { DataTable, DataChart },
    data: function() {
        return {
            data: [ 
                {label:'0', value:100}, 
                {label:'1', value:99}, 
                {label:'2', value:98}
            ]
        }
    },
    methods: {
        removeDataRow: function(index) {
            this.data.splice(index, 1);
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
.col {
    display: flex;
    flex-direction: row;
}

.mx-1 {
    margin-left: 8px;
    margin-right: 8px;
}

.mx-2 {
    margin-left: 16px;
    margin-right: 16px;
}
</style>
