import Vue from 'vue'
import Vuex from 'vuex'
import { api } from "../services/AxiosService"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiSpells: [],
    currentSpell: {}
  },

  mutations: {
    setApiSpells(state, spells) {
      state.apiSpells = spells
    },

    setCurrentSpell(state, spell) {
      state.currentSpell = spell
      console.log(state.currentSpell)
    }
  },

  actions: {
    async getApiSpells({ commit, dispatch }) {
      let res = await api.get("")
      console.log(res)
      commit("setApiSpells", res.data)
    },

    setSpell({ commit, dispatch }, spell) {
      commit("setCurrentSpell", spell)
    }
  },

  modules: {
  }
})
