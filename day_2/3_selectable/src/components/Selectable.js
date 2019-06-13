export default {
    props: {
        selected: Boolean
    },

    data: function() {
        return {
            hover: false
        }
    },

    computed: {
        selectableClass: function() {
            return this.selected 
                    ? 'selected' 
                    : this.hover ? 'hover' : ''; 
        }
    },

    methods: {
        toggleSelect: function() {
            this.$emit('update:selected', !this.selected);
        },

        toggleHover: function() {
            this.hover = !this.hover;
        }
    }
}