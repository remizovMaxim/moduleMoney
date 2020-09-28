<template>
  <div class="hello container">
    <div class="row mb-4">
      <div class="col-12">
        <h1 class="text-center">Список сгенерированных кодов</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-8 col-md-6 mx-auto">
        <table class="table">
          <tr v-for="code in arrayCodes" v-bind:key="code._id" v-bind:task_name="code.task_name">
            <td class="text-left">{{ code.task_name }}</td>
            <td class="text-right">
              <button v-on:click="deleteTask(code._id)" class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import {mapState} from "vuex";

export default {
  mounted() {
    this.getTasks();
  },
  computed: {
    ...mapState({
      arrayCodes: state => state.arrayCodes
    })
  },
  methods: {
    getTasks() {
      axios.get("/api/tasks")
        .then((result) => {
          this.$store.commit('updateArrayCodes', result.data.obj1);
        })
        .catch((err) => {
          console.error(err)
        });
    },
    deleteTask(id) {
      axios
        .delete(`/api/task/${id}`)
        .then((res) => {
          this.getTasks();
        })
        .catch((err) => {
          console.log('Oops...! ERROR:', err);
        });
    },
  },
};
</script>
