import { createStore } from 'vuex'
import auth from '@/modules/auth'

const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  },
  actions: {
    increment(context){
      context.commit('increment')
    }
  },
  modules: {
    auth,
  }
})

export default store;