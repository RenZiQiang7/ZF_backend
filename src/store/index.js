import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showHeader: true,
    showSidebar: true,
  },
  mutations: {
    hideHeader(state, bool) {
      state.showHeader = bool
    },
    hideSidebar(state, bool) {
      state.showSidebar = bool
    },
    setJwt(state, jwt) {
      state.jwt = jwt;
      // 设置localStorage
      localStorage.setItem("jwt", jwt);
  },
  },
  actions: {
  },
  modules: {
  }
})
