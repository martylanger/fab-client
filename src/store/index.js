import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    whoseTurn: "",
    phase: ""
  },
  mutations: {
    setWhoseTurn(state, whoseTurn) {
      state.whoseTurn = whoseTurn;
    },
    setPhase(state, phase) {
      state.phase = phase;
    }
  },
  getters: {
    whoseTurn: state => state.whoseTurn,
    phase: state => state.phase
  },
  actions: {},
  modules: {}
});
