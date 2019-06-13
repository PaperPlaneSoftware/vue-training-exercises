<template>
    <table>
        <th colspan="3">{{ title }}</th>
        <data-row v-for="(val, i) in value" 
            :key="i" 
            :label="val.label" 
            v-model="val.value" 
            @remove="() => remove(i)" />
        
        <tr>
            <td><hr /></td>
            <td><hr /></td>
            <td><hr /></td>
        </tr>

        <tr>
            <td><input type="text" placeholder="label" v-model="newLabel" /></td>
            <td><input type="text" placeholder="value: 0 - 100" v-model="newValue" /></td>
            <td><button @click="add">+</button></td>
        </tr>
    </table>
</template>

<script>
import DataRow from './DataRow';

export default {
    name: 'DataTable',
    components: { DataRow },
    props: {
        title: String,
        value: Array
    },
    data: function() {
        return {
            newLabel: '',
            newValue: ''
        }
    },
    methods: {
        add: function() {
            this.$emit('input', [...this.value, {label: this.newLabel, value: parseInt(this.newValue)}]);
        },
        remove: function(i) {
            this.$emit('remove', i);
        }
    }
}
</script>

<style>
th {
    font-size: 14pt;
    font-weight: bold;
    color: #3e3e3e;
    padding: 16px;

    border: 1px solid #afafaf;
    background-color: #dfdfdf;
}
</style>
