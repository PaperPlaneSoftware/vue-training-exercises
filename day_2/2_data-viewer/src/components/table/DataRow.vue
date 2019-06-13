<template>
    <tr>
        <td>{{ label }}</td>
        <td>{{ value }}</td>
        <td>
            <button @click="dec">-</button>
            <button @click="inc">+</button>
            <button @click="remove">x</button>
        </td>
    </tr>
</template>

<script>
export default {
    name: 'DataRow',
    props: {
        label: String, 
        value: Number 
    },
    methods: {
        remove: function() {
            this.$emit('remove');
        },
        dec: function() {
            this.$emit('input', this.value - 1);
        },
        inc: function() {
            this.$emit('input', this.value + 1);
        }
    }
}
</script>

<style scoped>
</style>
