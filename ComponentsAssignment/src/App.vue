<template>
  <section>
    <h2>Main App</h2>
    <div class="main">
      <ul>
        <active-user
          v-for="user in users"
          :key="user.id"
          :name="user.name"
          :age="user.age"
        ></active-user>
      </ul>
    

      <user-data @addUser="AddTheUser"></user-data>
    </div>
  </section>
</template>

<script>
import UserData from "./components/UserData.vue";
import ActiveUser from "./components/ActiveUser.vue";

export default {
  components: { UserData, ActiveUser },
  data() {
    return {
      users: [
        {
          id: "",
          name: "",
          age: "",
        },
      ],
    };
  },
  methods: {
    AddTheUser(name, age) {
      const newobj = {
        id: new Date().toISOString(),
        name: name,
        age: age,
      };
      this.users.push(newobj);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}
section {
  text-align: center;
}
.main {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 60%;
  margin: auto;
}

li {
  list-style: none;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 100%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>