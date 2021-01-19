<template>
  <div id="app">
    <panel_left>
    </panel_left>
    <panel_right v-bind:list="list" v-on:ChangeToan="ChangeToan">
      <p class="ppp">{{ toan }}</p>
    </panel_right>
    <button v-on:click="ChangeToanL2" class="button-change">
      {{ toan }}
    </button>
  </div>
</template>

<script>
import panel_left from "./components/header.vue";
import panel_right from "./components/footer.vue";
export default {
  name: "app",
  data() {
    return {
      toan: "Xin chào, tôi là toản",

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
  },
  methods: {
    ChangeToan: function() {
      this.toan = "helo, day ko phai la toan";
    },
    ChangeToanL2: function(){
      this.toan = "ddaay lafij laf toan";
    }
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
.button-change {
  position: absolute;
  width: 50px;
  height: 20px;
  top: 700px;
}
</style>
