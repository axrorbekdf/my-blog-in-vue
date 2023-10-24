import { createStore } from 'vuex'
import auth from '@/modules/auth'
import articles from '@/modules/articles'

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
    articles,
  }
})

export default store;