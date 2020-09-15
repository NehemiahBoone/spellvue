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

    setCurrentSpell(state, spellData) {
      state.currentSpell = spellData
    }
  },

  actions: {
    async getApiSpells({ commit, dispatch }) {
      let res = await api.get("")
      commit("setApiSpells", res.data)
    },

    async setSpell({ commit, dispatch }, spell) {
      let res = await api.get(spell.id)
      console.log(res.data)
      commit("setCurrentSpell", res.data)
    }
  },

  modules: {
  }
})
