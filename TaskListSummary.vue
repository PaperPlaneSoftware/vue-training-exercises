<template>
    <div class="summary-container">
        <span class="task-list-summary">{{ tasksRemaining }} of {{ tasks.length }} remaining</span>
    </div>
</template>

<script lang="ts">
export default {
    name: 'TaskListSummary',
    props: {
        tasks: Array
    },
    computed: {
        tasksRemaining: function() {
            return this.tasks.filter(t => !t.completed).length;
        }
    }
}
</script>


<style scoped>
.summary-container {
    display: flex;
    flex-direction: row;
}
</style>
