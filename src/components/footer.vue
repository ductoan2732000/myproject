<template>
  <div class="panel-right">
    <div class="header-right">
      <slot></slot>
    </div>
    <content_right v-bind:list="list" v-on:ChangeToan="ChangeToan">
      <div>
        <slot></slot>
        <p>{{ tit }}</p>
      </div>
    </content_right>
    <div class="foot-right">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import content_right from "./content-right";
export default {
  name: "panelright",
  data() {
    return {
      text: "day la panel right",
      tit: "đây là danh sách nhân viên"
    };
  },
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  components: {
    content_right
  },
  methods: {
    ChangeToan: function(){
      this.$emit('ChangeToan');
    }
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
  display: flex;
  width: 100%;
  height: 50px;
  background-color: brown;
}
.foot-right {
  display: flex;
  width: 100%;
  height: calc(100% - 550px);
  background-color: coral;
}
.ppp {
  padding-left: 10px;
}
</style>
