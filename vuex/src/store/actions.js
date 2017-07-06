import * as types from './types.js'
export default {
  increment: ({
      commit
    }) => {
    commit(types.INCREMENT)
  },
  decrement: ({
    commit
  }) => {
    commit(types.DECREMENT)
  },
  clickold: ({
    commit,
    state
  }) => {
    if (state.mutaions.count % 2 === 0) {
      commit(types.INCREMENT)
    }
  },
  clickasync: ({
    commit
  }) => {
    return new Promise((resolve) => {
      setTimeout(function () {
        commit(types.INCREMENT)
      }, 1000)
    })
  }
}
