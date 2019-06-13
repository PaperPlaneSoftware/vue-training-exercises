<template>
    <div class="wine-container" 
        :class="selectableClass" 
        @click="toggleSelect" 
        @mouseover="toggleHover" 
        @mouseout="toggleHover">
        <small>{{ name }}</small>
        <div class="bg-emoji">🍷</div>
    </div>
</template>

<script>
import Selectable from './Selectable';

export default {
    name: 'Wine',
    mixins: [Selectable],
    props: {
        name: String
    }
}
</script>

<style scoped>
.wine-container {
    border: 4px solid black;
    border-radius: 8px;
    width: 100px;
    height: 100px;
    margin: 8px;
}

.selected {
    background: pink;
}

.hover {
    background: peachpuff;
}

.bg-emoji {
    font-size: 36pt;
    width: 100px;
    height: 100px;
    line-height: 100px;
}
</style>