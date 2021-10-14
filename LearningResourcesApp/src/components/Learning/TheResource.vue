<template>
  <base-card>
    <base-button @click="switchTabs('stored-resources')" :mode="StoredResButton"
      >All resources</base-button
    >
    <base-button @click="switchTabs('add-resource')" :mode="AddResButton"
      >Add Resource</base-button
    >
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </base-card>

  <!-- <stored-resources :data="data"></stored-resources> -->
</template>

<script>
import AddResource from './AddResource.vue';
import StoredResources from './StoredResources.vue';

export default {
  components: { StoredResources, AddResource },
  data() {
    return {
      selectedTab: 'stored-resources',
      learningData: [
        {
          id: 'vue',
          title: 'Vue Js',
          description: 'Learn Vue js',
          link: 'https://www.vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn Google',
          link: 'https://www.Google.com',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.learningData,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
  methods: {
    switchTabs(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const obj = {
        title: title,
        description: description,
        url: url,
        id: new Date().toISOString(),
      };

      this.learningData.unshift(obj);
      this.selectedTab = 'stored-resources';
    },
    removeResource(id) {
      const itemIndex = this.learningData.findIndex((res) => id === res.id);
      console.log(itemIndex);
      console.log(this.learningData);
      this.learningData.splice(itemIndex, 1);
      console.log(this.learningData);
    },
  },
  computed: {
    StoredResButton() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    AddResButton() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
};
</script>