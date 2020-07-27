<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer app>
      <span>{{appName}}</span>
      <v-spacer></v-spacer>
      <span>v{{version}} &copy; {{annee}}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import Component from "vue-class-component";
import { RootState } from "@/store/types";
import Notifications from "@/components/Notification.vue";
import NetworkStatus from "@/components/NetworkStatus.vue";
import Toolbar from "./Toolbar.vue";
import LeftMenu from "./Menu.vue";
import FeatureView from "@/features/Index.vue";

@Component({
})
export default class Root extends Vue {
  private annee: number = new Date().getFullYear();
  private appName: string = "Ideal Group";
  private version: string = `1.0`;
}
</script>
