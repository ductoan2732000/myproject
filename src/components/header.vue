<template>
  <div class="panel-left">
    <div class="title-left">{{ title }}</div>
    <content_left />
  </div>
</template>

<script>
import content_left from "./content_left.vue";
export default {
  name: "panelleft",
  data() {
    return {
      title: "Xin chao cac ban"
    };
  },
  components: {
    content_left
  }
};
</script>

<style>
.panel-left {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 300px;
  height: 100vh;
  background-color: black;
}
.title-left {
  width: 100%;
  height: 30px;
  background-color: aquamarine;
}
</style>
