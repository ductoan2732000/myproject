<template>
  <div class="panel-right">
    <div class="header-right"></div>
    <content_right v-bind:list="list"></content_right>
    <div class="foot-right"></div>
  </div>
</template>

<script>
import content_right from './content-right';
export default {
  name: "panelright",
  data() {
    return {
      text: "day la panel right"
    };
  },
  props: {
      list: {
          type: Array,
          default: []
      }
  },
  components: {
      content_right,
  }
};
</script>

<style>
.panel-right {
  position: absolute;
  width: calc(100% - 300px);
  height: 100vh;
  right: 0px;
  top: 0px;
}
.header-right {
  width: 100%;
  height: 50px;
  background-color: brown;
}
.foot-right {
  width: 100%;
  height: calc(100% - 550px);
  background-color: coral;
}
</style>
