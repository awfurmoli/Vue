<template>
  <form @submit.prevent="addContact">
    <div>
      <label>Name</label>
      <input v-model="name" type="text" />
    </div>

    <div>
      <label>Phone</label>
      <input v-model="phone" type="text" />
    </div>

    <div>
      <label>Email</label>
      <input v-model="email" type="email" />
    </div>
    <button type="submit">Add Contact</button>
  </form>
</template>


<script>
export default {
  emits: ['add-contact'],
  data() {
    return {
      name: "",
      phone: "",
      email: "",
    };
  },
  methods: {
    addContact() {
      this.$emit("add-contact", this.name, this.phone, this.email);
    },
  },
};
</script>