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
          <tr v-for="todo in todos" v-bind:key="todo._id" v-bind:task_name="todo.task_name">
            <td class="text-left">{{ todo.task_name }}</td>
            <td class="text-right">
              <button v-on:click="deleteTask(todo._id)" class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      todos: [],
      id: "",
      taskname: "",
      isEdit: false,
      myCode: "",
    };
  },
  mounted() {
    this.getTasks();
  },
  methods: {
    getTasks() {
      axios({method: "GET", url: "/api/tasks"}).then(
        (result) => {
          console.log(result);
          this.todos = result.data.obj1;
        },
        (error) => {
          console.error(error);
        }
      );
    },
    deleteTask(id) {
      axios
        .delete(`/api/task/${id}`)
        .then((res) => {
          this.taskname = "";
          this.getTasks();
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
