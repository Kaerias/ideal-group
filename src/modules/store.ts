import { RootState } from '@/store/types';
import { Module, ActionTree, MutationTree, GetterTree } from "vuex";

// tslint:disable-next-line: no-empty-interface
export interface TestState {
    str: string;
}


const state: TestState = {
    str: "dsqdqsdqs"
};

const getters: GetterTree<TestState, RootState> = {
    getStr(state) {
        return state.str;
    }
}

const actions: ActionTree<TestState, RootState> = {
    modifTest({ commit }, t: string) {
        commit("setTest", t);
    }
};

const mutations: MutationTree<TestState> = {
    setTest(state, t: string) {
        state.str = t;
    }
}
export const test: Module<TestState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
