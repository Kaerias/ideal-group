import { RootState } from '@/store/types';
import { Module, ActionTree, MutationTree, GetterTree } from "vuex";

// tslint:disable-next-line: no-empty-interface
export interface BoardState {
}

const state: BoardState = {
};

const getters: GetterTree<BoardState, RootState> = {
}

const actions: ActionTree<BoardState, RootState> = {
};

const mutations: MutationTree<BoardState> = {
}
export const board: Module<BoardState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
