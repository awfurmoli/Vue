<template>
  <div>
    <base-dialog v-if="invalidData" title="Invalid Input" @close="confirmError">
      <template #default>
        <p>At least one input is Invalid.</p>
        <p>Pleae check the inputs and resubmit!</p>
      </template>

      <template #actions>
        <base-button @click="confirmError">Okay</base-button>
      </template>
    </base-dialog>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="descritption"
          rows="3"
          type="text"
          ref="descriptionInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" name="link" type="url" ref="linkInput" />
      </div>

      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      invalidData: false,
    };
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descriptionInput.value;
      const enteredLink = this.$refs.linkInput.value;

      if (
        enteredTitle.trim() === '' ||
        enteredDescription.trim() === '' ||
        enteredLink.trim() === ''
      ) {
        this.invalidData = true;
        return;
      }
      this.addResource(enteredTitle, enteredDescription, enteredLink);
      this.$refs.titleInput.value = null;
      this.$refs.descriptionInput.value = null;
      this.$refs.linkInput.value = null;
    },
    confirmError() {
      this.invalidData = false;
    },
  },
};
</script>

<style>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

.form-control {
  margin: 1rem 0;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}
</style>