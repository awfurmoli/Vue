<template>
  <div>
    <ul>
      <teams-item
        v-for="team in teams"
        :key="team.id"
        :id="team.id"
        :name="team.name"
        :member-count="team.members.length"
      ></teams-item>
    </ul>
    <!-- This will contain the child route element defined on main.js -->
    <router-view></router-view>
  </div>
</template>

<script>
import TeamsItem from './TeamsItem.vue';

export default {
  components: {
    TeamsItem,
  },
  inject: ['teams'],
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>