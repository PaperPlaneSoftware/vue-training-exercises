<template>
    <div class="app">
        <div class="task-list-container">
            <h3 v-if="tasks.length === 0">No Tasks</h3>
            <task v-for="(task, i) in tasks" :key="i" :action="task.action" :completed.sync="task.completed" />
        </div>

        <task-list-summary :tasks="tasks" />

        <div id="app">
            <div class="new-task-container">
                <input type="text" placeholder="New Task" v-model="taskText" />
                <button @click="addTask">New Task</button>
            </div>
        </div>
    </div>
</template>

<script>
import Task from './components/Task'
import TaskListSummary from './components/TaskListSummary'

export default {
    name: 'app',
    components: { Task, TaskListSummary },
    data: function() {
        return {
            taskText: '',
            tasks: []
        }
    },
    methods: {
        addTask: function() {
            this.tasks.push({ completed: false, action: this.taskText });
        }
    }
}
</script>

<style>
#app {
    font-family: 'Helvetica', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #3e3e3e;
    margin-top: 60px;
}

.col {
    display: flex;
    flex-direction: column;
}

.row {
    display: flex;
    flex-direction: row;
}

.task-list-container {
    border: 1px solid #cecece;
    border-radius: 4px;
    background-color: #dfdfdf;
    color: #aeaeae;

    display: flex;
    flex-direction: column;
    width: 300px;
    justify-content: center;

    padding: 16px;
}

.task-list-summary {
    font-size: 10pt;
    color: #3e3e3e;
    margin-top: 16px;
}

.new-task-container {
    display: flex;
    width: 300px;
}

input[type=text] {
    padding: 8px;
    flex-grow: 1;
}

button {
    cursor: pointer;
}
</style>
