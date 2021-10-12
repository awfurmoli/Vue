<template>
  <div>
    <the-header></the-header>
    <button @click="activate('active-goals')">Active Goals</button>
    <button @click="activate('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selected === 'active-goals'"></active-goals>
    <manage-goals v-if="selected === 'manage-goals'"></manage-goals> -->
    <!-- this Will switch between 2 components based on data. -->
    <keep-alive>
      <component :is="selected"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";
export default {
  components: {
    TheHeader,
    ManageGoals,
    ActiveGoals,
  },
  data() {
    return {
      selected: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    activate(cmp) {
      this.selected = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>