import Vue from "vue";
const app = new Vue({
  el: "#app",
  data: {
    mobilemenu: false
  },
  methods: {
    mobilemenuClick() {
      this.mobilemenu = !this.mobilemenu;
    }
  }
});
