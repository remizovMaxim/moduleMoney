<template>
  <div class="hello container">
    <div class="row">
      <div class="col-8 col-md-6 mx-auto">
        <h1 class="text-center">Проверить код</h1>
        <i>{{ myMessage }}</i>
        <form v-on:submit.prevent="updateTask">
          <label for="tasknameinput">Enter your code</label>
          <input
            :value="inputText"
            @input="updateInputText"
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
import {mapState} from "vuex";

export default {
  data() {
    return {
      myMessage: "",
    };
  },
  computed: {
    ...mapState({
      inputText: state => state.inputText
    })
  },
  methods: {
    updateTask() {
      axios
        .put(`/api/task/`, {task_name: this.$store.state.inputText})
        .then((res) => {
          const finResult = mess => {
            this.myMessage = mess;
          }
          if (res.data.length === 1) {
            finResult("Great!");
          } else {
            finResult('Your code is not validate');
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.$store.commit('updateInputText', '')
        });
    },
    updateInputText(e) {
      this.$store.commit('updateInputText', e.target.value)
    }
  },
};
</script>
