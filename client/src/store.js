import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    inputText: ''
  },
  mutations: {
    updateInputText: function(state, code){
      state.inputText = code
    }
  }
})

export default store
