import Vue from 'vue'
import Vuex from 'vuex'
import { api } from "../services/AxiosService"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiSpells: []
  },

  mutations: {
    setApiSpells(state, spells) {
      state.apiSpells = spells
    }
  },

  actions: {
    async getApiSpells({ commit, dispatch }) {
      let res = await api.get("")
      console.log(res)
      commit("setApiSpells", res.data)
    }
  },

  modules: {
  }
})
