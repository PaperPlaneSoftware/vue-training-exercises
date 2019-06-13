<template>
    <div class="card-container">
        <div class="header">
            <slot name="header">Title!</slot>
        </div>
        <div class="body">
            <slot name="body">Nothing to show!</slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card'
}
</script>

<style scoped>
.card-container {
    display: flex;
    flex-direction: column;

    border: 4px solid #3e3e3e;
    border-radius: 8px;

    width: 200px;
    margin: 16px;
}

.header {
    font-size: 16pt;
    font-weight: bold;

    margin-bottom: 16px;
}

.body {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
}
</style>