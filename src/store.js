import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    reviewCount: +(localStorage.reviewCount || 0)
  },
  mutations: {
    INCREASE_REVIEW_COUNT (state) {
      state.reviewCount++
    }
  },
  actions: {
    increaseReviewCount ({ commit, state }) {
      commit('INCREASE_REVIEW_COUNT')
      localStorage.reviewCount = state.reviewCount
    }
  }
})
