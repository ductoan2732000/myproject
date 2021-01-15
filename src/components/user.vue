<template>
  <li>
    <p>{{ user.index + "  " + user.name }}</p>
  </li>
</template>

<script>
export default {
  name: "user",
  data() {
    return {};
  },
  props: {
    user: {
      type: Object,
      default: null
    }
  }
};
</script>

<style></style>
