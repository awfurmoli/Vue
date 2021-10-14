<template>
  <div>
    <li :key="id">
      <base-card>
        <header>
          <h3>{{ title }}</h3>
          <base-button @click="removeResource(id)" mode="flat"
            >Delete</base-button
          >
        </header>
        <p>{{ description }}</p>
        <nav><a :href="link">View Resource</a></nav>
      </base-card>
    </li>
  </div>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseCard from '../UI/BaseCard.vue';
export default {
  inject: ['removeResource'],
  components: { BaseCard, BaseButton },
  props: ['id', 'title', 'description', 'link'],
  data() {
    return {};
  },
};
</script>

<style>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>