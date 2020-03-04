export default {
  data() {
    return {
      hover: false,
      selected: false
    };
  },

  computed: {
    cssClass() {
      return this.selected ? "selected" : this.hover ? "hover" : "";
    }
  },

  methods: {
    toggleHover() {
      this.hover = !this.hover;
    },

    toggleSelect() {
      this.selected = !this.selected;
      // this.$emit("update:selected", !this.selected);
    }
  }
};
