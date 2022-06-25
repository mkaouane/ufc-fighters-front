import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    fighters: []
  },
  getters: {
  },
  mutations: {
    fetchFighters(state, newFighters) {
      state.fighters = newFighters
      console.log(state.fighters)
    },

    postFighter(state, newFighter) {
      state.fighters = [newFighter, ...state.fighters]
    }
  },
  actions: {
    async fetchFighters({commit}) {
     await axios.get('http://localhost:5096/api/fighters').then((res) => commit('fetchFighters', res.data))
    },

    async postFighter({commit}, newFighter) {
      await axios.post('http://localhost:5096/api/fighters', newFighter).then((res) => commit('postFighter', res.data))
      .catch((err) =>console.log(err.response))
    }
  },
  modules: {
  }
})
