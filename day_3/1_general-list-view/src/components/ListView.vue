<template>
    <div class="container">
        <input type="text" v-model="searchText" />

        <div class="body" :class="[type]">
            <div v-for="(item,i) in filteredItems" :key=i>
                <slot name="item" :item="item"></slot>
            </div>
        </div>

        <div class="footer">
            <button @click="() => type='grid'">#</button>
            <button @click="() => type='vertical'">^</button>
            <button @click="() => type='horizontal'">></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GridView',
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    computed: {
        filteredItems: function() {
            return this.items.filter(i => i.name.includes(this.searchText));
        }
    },
    data() {
        return {
            searchText: '',
            type: 'horizontal'
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-width: 200px;
    max-width: 420px;
    border: 2px solid #3e3e3e;
    border-radius: 4px;
}

.body {
    padding: 16px;
}

.horizontal {
    display: flex;
    flex-direction: row;

    height: 100%;
    overflow-x: scroll;
    white-space: nowrap;
}

.vertical {
    display: flex;
    flex-direction: column;

    height: 400px;
    overflow-x: hidden;
    overflow-y: scroll;
    white-space: nowrap;
}

.grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.footer {
    display: flex;
    flex-direction: row-reverse;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;

    height: 24px;
    padding: 1px;
    background-color: #eeeeee;
}
</style>

