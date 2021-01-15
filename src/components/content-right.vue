<template>
  <div class="content-right">
    <ul>
      <us
        v-for="user in list"
        v-bind:key="user.index"
        v-bind:user="user"
      ></us>
    </ul>
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
  }
};
</script>

<style>
.content-right {
  width: 100%;
  height: 500px;
  background-color: cadetblue;
}
</style>
