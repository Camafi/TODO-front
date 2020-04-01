<template>
  <div>
    <h2>List of TODO</h2>
    <table>
      <thead>
        <tr>
          <th>TODO</th>
          <th>Thing</th>
          <th colspan="2">DELETE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="thing in TODO" v-bind:key="thing.id">
          <td>{{ thing.name }}</td>
          <td>{{ thing.thing }}</td>
          <td class="deleteLabel" v-on:click="deleteTODO(thing.id)">DELETE</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TODOTable",
  data() {
    return {};
  },
  props: {
    TODO: Array
  },
  created() {},
  methods: {
    deleteTODO(thingId) {
      this.$emit("deleteTODO", thingId);
    }
  }
};
</script>

<style scoped>
.deleteLabel {
  text-decoration: underline;
  font-style: italic;
  color: red;
  cursor: pointer;
}
</style>
