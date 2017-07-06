import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import actions from './actions'
import mutaions from './mutaions'
export default new Vuex.Store({
  actions,
  modules: {
    mutaions
  }
})
