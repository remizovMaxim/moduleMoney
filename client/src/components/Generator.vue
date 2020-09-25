<template>
  <div class="hello container">
    <div class="row">
      <div class="col-8 col-md-6 mx-auto">
        <h1 class="text-center">Генератор кода</h1>
        <table class="table">
          <tr v-bind:key="oneCode._id" v-bind:task_name="oneCode.task_name">
            <td class="text-left">{{ oneCode.task_name }}</td>
            <td class="text-right">
              <button v-on:click="deleteTask(oneCode._id)" class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </table>
        <form v-on:submit.prevent="addNewTask" v-if="this.isEdit == false">
          <button type="submit" class="btn btn-success btn-block mt-3">Сгенерировать код</button>
        </form>
<!--        <form v-on:submit.prevent="updateTask" v-else>-->
<!--          <label for="tasknameinput">Enter your code</label>-->
<!--          <input-->
<!--            v-model="taskname"-->
<!--            id="tasknameinput"-->
<!--            class="form-control"-->
<!--            placeholder="Enter your code"-->
<!--          />-->
<!--          <button type="submit" class="btn btn-success btn-block mt-3">Отправить</button>-->
<!--        </form>-->
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      oneCode: {},
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
      axios({method: "GET", url: "/api/one"}).then(
        (result) => {
          console.log('MongoDB: ', result.data[0].task_name);
          this.oneCode = result.data[0];
        },
        (error) => {
          console.error(error);
        }
      );
    },
    addNewTask() {
      axios
        .post("/api/task", {})
        .then((res) => {
          this.getTasks();
          // this.isEdit = true;
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
