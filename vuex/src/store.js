import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var state = {
  count: 10
}
const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  },
  clickold (state) {
    state.count--
  }
}
const actions = {
  increment: ({
commit
  }) => {
    commit('increment')
  },
  decrement: ({
 commit
  }) => {
    commit('decrement')
  },
  clickold: ({
 commit,
 state
  }) => {
    if (state.count % 2 === 0) {
      commit('increment')
    }
  },
  clickasync: ({
  commit
  }) => {
    return new Promise((resolve) => {
      setTimeout(function () {
        console.log(444)
        resolve()
      }, 1000)
    })
  }
}
const getters = {
  count (state) {
    return state.count
  },
  getold (state) {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
