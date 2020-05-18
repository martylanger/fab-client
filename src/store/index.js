import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {
    setWhoseTurn(arg) {
      this.state.whoseTurn = arg;
    }
  },
  actions: {},
  modules: {}
});
