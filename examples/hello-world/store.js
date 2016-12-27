import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  message: 'Hello World!'
}

export default new Vuex.Store({
    state,
})