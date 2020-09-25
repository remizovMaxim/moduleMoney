<template>
  <div class="hello container">
    <div class="row">
      <div class="col-8 col-md-6 mx-auto">
        <h1 class="text-center">Проверить код</h1>
        <i>{{ myCode }}</i>
        <form v-on:submit.prevent="updateTask">
          <label for="tasknameinput">Enter your code</label>
          <input
            v-model="taskname"
            id="tasknameinput"
            class="form-control"
            placeholder="Enter your code"
          />
          <button type="submit" class="btn btn-success btn-block mt-3">Отправить</button>
        </form>
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
  },
  methods: {
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
  },
};
</script>
