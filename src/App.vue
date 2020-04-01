<template>
  <div id="app">
    <TODOform v-on:AddTODO="AddTODO" />
    <TODOTable :TODO="TODO" v-on:deleteTODO="deleteTODO" />
  </div>
</template>

<script>
import TODOform from './components/TODOform.vue'
import TODOTable from './components/TODOTable.vue'
import {
  getTODO,
  AddTODO,
  deleteTODO
} from "./services/TODO"
export default {
  name: 'App',
  components: {
    TODOform,
    TODOTable
  },
  data(){
    return{
      TODO :[]
    };
  },
  async created(){
    const TODO = await getTODO();
    this.TODO = [...TODO];
  },
  methods: {
    AddTODO({name,thing}){
      AddTODO({name,thing})
        .then(resp => resp.json())
        .then(oneTODO =>{
          this.TODO = [...this.TODO, oneTODO];
        })
        .catch(err =>{
          console.log(err);
        });
    },
    deleteTODO(id){
      deleteTODO(id).then(() => {
          const indecofTODOToDelete = this.TODO.findIndex(
            oneTODO => oneTODO.id === id
          );
          this.TODO.splice(indecofTODOToDelete, 1)
        });
    }
    
  }
}
</script>
