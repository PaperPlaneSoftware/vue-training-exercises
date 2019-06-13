<template>
    <div id="app">
        <list-view :items="things">
            <template v-slot:item="{item}">
                <component :is="item.type" :name="item.name" />
            </template>
        </list-view>
    </div>
</template>

<script>
import ListView from './components/ListView'
import Wine from './components/Wine'
import Beer from './components/Beer'

export default {
    name: 'app',
    components: { ListView, Wine, Beer },
    data: function() {
        return {
            things: [
                {type: 'wine', name: 'Merlot'},
                {type: 'beer', name: 'Bitter'},
                {type: 'wine', name: 'Chardonnay'},
                {type: 'wine', name: 'Sauvignon blanc'},
                {type: 'beer', name: 'Stout'},
                {type: 'beer', name: 'IPA'},
            ]
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
}
</style>

