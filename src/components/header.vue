<template>
  <div class="panel-left">
    <div class="title-left">
      <p class="ppp">{{ todos }}</p>
    </div>
    <content_left />
  </div>
</template>

<script>
import { mapState } from "vuex";
import content_left from "./content_left.vue";
export default {
  name: "panelleft",
  data() {
    return {};
  },
  components: {
    content_left
  },
  computed: mapState(["todos"])
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
  display: flex;
}
</style>
