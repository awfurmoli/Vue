<template>
  <li v-if="name">
    <h2>UserName: {{ name }}</h2>
    <h3>Age: {{ age }}</h3>
  </li>
  <h3 v-else>Users will appear here!</h3>
</template>

<script>
export default {
  props: ["name", "age"],
  data() {
    return {
      isVisible: false,
    };
  },
};
</script>