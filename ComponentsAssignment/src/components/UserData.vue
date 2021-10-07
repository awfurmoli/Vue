<template>
  <div>
    <form @submit.prevent="addUser">
      <div>
        <label>Name</label>
        <input v-model="enteredName" type="text" />
      </div>

      <div>
        <label>Age</label>
        <input v-model="enteredAge" type="text" />
      </div>
      <button type="submit">Add Contact</button>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["add-user"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    addUser() {
      this.$emit("add-user", this.enteredName, this.enteredAge);
    },
  },
};
</script>