<template>
  <ul>
    <resource-item
      v-for="item in resources"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :description="item.description"
      :link="item.link"
      li
      >items will go here</resource-item
    >
  </ul>
</template>

<script>
import ResourceItem from './ResourceItem.vue';

export default {
  components: { ResourceItem },
  inject: ['resources'],
  data() {
    return {};
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 40rem;
  margin: auto;
}
</style>