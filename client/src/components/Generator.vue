<template>
  <div class="hello container">
    <div class="row">
      <div class="col-8 col-md-6 mx-auto">
        <h1 class="text-center">Генератор кода</h1>
        <table class="table">
          <tr v-bind:key="oneCode._id" v-bind:task_name="oneCode.task_name">
            <td class="text-left" title="your code">{{ oneCode.task_name }}</td>
            <td class="text-right">
              <button v-on:click="deleteTask(oneCode._id)" class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </table>
        <form v-on:submit.prevent="addNewTask">
          <button type="submit" class="btn btn-success btn-block mt-3">Сгенерировать код</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import {mapState} from "vuex";

export default {
  data() {
    return {
      oneCode: {},
      myCode: "",
    };
  },
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
        .then(() => {
          this.oneCode = this.arrayCodes.slice(-1)[0]
        })
        .catch((err) => {
          console.error(err)
        });
    },
    addNewTask() {
      axios
        .post("/api/task", {})
        .then((res) => {
          this.getTasks();
          this.myCode = "";
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateTask() {
      axios
        .put(`/api/task/`, {task_name: this.taskname})
        .then((res) => {
          const finResult = mess => {
            this.taskname = "";
            this.isEdit = false;
            this.myCode = mess;
          }
          if (res.data.length === 1) {
            finResult("Great!");
          } else {
            finResult('Your code is not validate');
          }
        })
        .catch((err) => {
          console.log(err);
        });
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
