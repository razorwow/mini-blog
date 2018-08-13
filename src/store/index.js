import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import {mutations} from "./mutations";
import * as actions from "./actions";

Vue.use(Vuex);

const state = {
  articles: [],
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins: [createPersistedState()]
})
