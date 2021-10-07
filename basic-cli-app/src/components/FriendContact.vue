<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Favorite</button>
    <button @click="toggleDetails">
      {{ detailsVisible ? "Hide Detials" : "Show Details" }}
    </button>
    <ul v-if="detailsVisible">
      <li>Phone: {{ phoneNumber }}</li>
      <li>Email: {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  //   props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  emits: ["toggle-favorite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      detailsVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>