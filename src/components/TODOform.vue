<template>
  <div>
    <h2>Add TODO</h2>
    <label for="TODONameInput">Name of the TODO</label>
    <input v-model="TODOName" type="text" id="TODONameInput" />
    <label for="TODOThingInput">Things to do</label>
    <input v-model="TODOThings" type="text" id="TODOThingInput" />
    <button v-on:click="submitForm">ADD</button>
  </div>
</template>


<script>
export default {
  name: "AttendeeForm",
  data() {
    return {
      TODOName: null,
      TODOThings: null
    };
  },
  props: {},
  created() {},
  updated() {
    // console.log("Updated");
  },
  watch: {},
  methods: {
    submitForm() {
      this.$emit("AddTODO", {
        id: undefined,
        name: this.TODOName,
        thing: this.TODOThings
      });
    }
  }
};
</script>

<style scoped>
label,
input {
  display: block;
  margin-bottom: 10px;
}
</style>