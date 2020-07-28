<template>
  <div>
    <table>
      <tr v-for="(ligne, index) in board" :key="index">
        <button @click="addJeton(ligne)">click</button>
        <td v-for="(jeton, indexJeton) in ligne" :key="indexJeton">{{jeton}}</td>
      </tr>
    </table>
    <p>score = {{score}}</p>
    <p>tour: {{tour}} </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { board } from "./store";
import { Action, Getter, namespace } from "vuex-class";

const boardModule = namespace("board");

@Component
export default class Board extends Vue {
  private nbrCaseByLign = 5;

  private tour = 1;

  private score = 4;

  private board: number[][] = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  private addJeton(ligne: number[]) {
    for (let i = 0; i < ligne.length; i++) {
      if (ligne[i] === 0) {
        const jeton = Math.pow(2, Math.floor(Math.random() * 10));
        ligne.splice(i, 1, jeton);
        this.tour += 1;
        this.score += jeton;
        return;
      }
    }
  }

  public mounted() {
    this.board[Math.floor(Math.random() * Math.floor(4))].splice(Math.floor(Math.random() * Math.floor(4)), 1, 2);
    this.board[Math.floor(Math.random() * Math.floor(4))].splice(Math.floor(Math.random() * Math.floor(4)), 1, 2);
  }

  public beforeCreate() {
    if (this.$store.state.board === undefined) {
      this.$store.registerModule("board", board);
    }
  }
}
</script>

<style>
</style>