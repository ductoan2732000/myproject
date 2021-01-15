<template>
  <div class="content-left">
    <div class="menu1"></div>
    <div class="menu2"></div>
    <div class="menu3"></div>
    <div class="menu4"></div>
  </div>
</template>

<script>
export default {
  name: "content-left",
  data() {
    return {};
  }
};
</script>

<style>
.content-left {
  width: 100%;
  height: calc(100% - 30px);
  background-color: blue;
}
.menu1 {
  width: 100%;
  height: 30px;
  background-color: darkblue;
}
</style>
