<template>
  <div class="content-right">
    <slot></slot>
    <ul>
      <us v-for="user in list" v-bind:key="user.index" v-bind:user="user"></us>
    </ul>
    <div>
      <button class="avatar" v-on:click="clickButtonAvatat">
        Thay đổi avatar
      </button>
      <button class="change-from-chill" v-on:click="ChangeToDad">
        Thay ddooir toan
      </button>
      <input
        type="file"
        name=""
        id=""
        ref="buttonClick"
        style="display: none"
      />
    </div>
  </div>
</template>

<script>
import us from "./user.vue";
export default {
  name: "contentright",
  data() {
    return {};
  },

  props: {
    list: {
      type: Array,
      default: []
    }
  },
  components: {
    us
  },
  methods: {
    clickButtonAvatat: function() {
      console.log(this.$refs.buttonClick.click());
    },
    ChangeToDad: function() {
      this.$emit('ChangeToan');
    }
  }
};
</script>

<style>
.content-right {
  display: inline-block;
  width: 100%;
  height: 500px;
  background-color: cadetblue;
}
.avatar {
  widows: 50px;
  height: 25px;
  background-color: cyan;
  border: 1px solid;
}
</style>
