<template>
    <div class="task-container">
        <input type="checkbox" @change="toggleCompleted" />
        <strike v-if="completed">{{ action }}</strike>
        <span v-else>{{ action }}</span>
    </div>
</template>

<script>
export default {
    name: 'Task',
    props: { action: String, completed: Boolean },
    methods: {
        toggleCompleted: function() {
            this.$emit('update:completed', !this.completed);
        }
    }
}
</script>

<style scoped>
.task-container {
    border-radius: 4px;
    border: 1px solid #cfcfcf;
    box-sizing: border-box;
    padding: 8px;
    margin-top: 8px;

    background-color: #efefef;
    color: #3e3e3e;

    display: flex;
    width: 100%;
}

input[type=checkbox] {
    margin-right: 8px;
}
</style>
