import Vue from "vue";
import Vuex, { StoreOptions, ActionTree, MutationTree } from "vuex";

import { RootState } from './types';

Vue.use(Vuex);

const state: RootState = {
};

const actions: ActionTree<RootState, any> = {
};

const mutations: MutationTree<RootState> = {
};

const store: StoreOptions<any> = {
  state,
  actions,
  mutations,
  modules: {
  },
};

export default new Vuex.Store<any>(store);
