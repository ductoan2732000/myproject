<template>
  <div id="app">
    <panel_left />
    <panel_right v-bind:list="list"></panel_right>
  </div>
</template>

<script>
import panel_left from "./components/header.vue";
import panel_right from "./components/footer.vue";
export default {
  name: "app",
  data() {
    return {
      list: [
        {
          index: 0,
          name: "toan"
        },
        {
          index: 1,
          name: "toan"
        },
        {
          index: 2,
          name: "toan"
        },
        {
          index: 4,
          name: "toan"
        },
        {
          index: 3,
          name: "toan"
        }
      ]
    };
  },
  components: {
    panel_left,
    panel_right
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100vh;
}
</style>
