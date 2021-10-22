<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to Team u2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  // teamId is recived is the id at the end of /teams/ , this will get us the clicked Id.
  props: ['teamId'],
  inject: ['users', 'teams'],
  data() {
    return {
      teamName: '',
      members: [],
    };
  },

  methods: {
    loadMembers(teamId) {
      const selectedTeam = this.teams.find((team) => team.id === teamId);
      this.teamName = selectedTeam.name;
      const members = selectedTeam.members;
      const selectedMembers = [];
      for (const member of members) {
        const selectedUser = this.users.find((user) => user.id === member);
        selectedMembers.push(selectedUser);
      }
      this.members = selectedMembers;
    },
  },
  created() {
    this.loadMembers(this.teamId);
  },
  // Watch for new Id and update the UI/ otherwise the old id will be shown.
  watch: {
    teamId(newId) {
      this.loadMembers(newId);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>