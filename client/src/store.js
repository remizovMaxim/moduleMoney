import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    inputText: '',
    arrayCodes: [
      {
        task_name: 'Загрузка'
      }
    ]
  },
  mutations: {
    updateInputText(state, code) {
      state.inputText = code
    },
    updateArrayCodes(state, arrayCodes){
      state.arrayCodes = arrayCodes
    }
  }
})

export default store
