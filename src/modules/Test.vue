<template>
  <div>
    <input type="text" v-model="testChange" placeholder="edit me">
    <p>test = {{str}}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { test, TestState } from "./store";
import {Action, Getter, namespace } from "vuex-class";

const testModule = namespace("test");

@Component
export default class Test extends Vue {
  @testModule.Getter("getStr")
  private str!: string;

  @testModule.Action("modifTest")
  private modifTest!: (t: string) => void;

  private get testChange() {
    return this.str;
  }

  private set testChange(t: string) {
    this.modifTest(t);
  }

  public beforeCreate() {
    if (this.$store.state.test === undefined) {
      this.$store.registerModule("test", test);
    }
  }
}
</script>

<style>
</style>