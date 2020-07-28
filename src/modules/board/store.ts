import { RootState } from '@/store/types';
import { Module, ActionTree, MutationTree, GetterTree } from "vuex";

// tslint:disable-next-line: no-empty-interface
export interface BoardState {
  board: number[][][];
  saveChose: number;
  boardChoose: number[][];
}

const state: BoardState = {
  board: [],
  saveChose: 0,
  boardChoose: []
};

const getters: GetterTree<BoardState, RootState> = {
  getSave(state) {
    return state.board.length
  },
  getBoard(state, save: number) {
    if (state.boardChoose.length === 0) {
      state.boardChoose =
        [[0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]];
      state.boardChoose[Math.floor(Math.random() * Math.floor(4))].splice(
        Math.floor(Math.random() * Math.floor(4)),
        1,
        2
      );
      state.boardChoose[Math.floor(Math.random() * Math.floor(4))].splice(
        Math.floor(Math.random() * Math.floor(4)),
        1,
        2
      );
      return state.boardChoose;
    }
    return state.boardChoose;
  }
}

const actions: ActionTree<BoardState, RootState> = {
  save({ commit }, board: number[][]) {
    commit("addSave", board)
  },
  changeSave({ commit }, changeSave: number) {
    commit("changeSave", changeSave)
  }
};

const mutations: MutationTree<BoardState> = {
  addSave(state, board: number[][]) {
    state.board.push(board);
  },
  changeSave(state, changeSave: number) {
    state.saveChose = changeSave;
  }
}
export const board: Module<BoardState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
