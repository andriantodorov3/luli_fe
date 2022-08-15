<template>
  <v-app-bar
    id="app-top-bar"
    app
    absolute
    class="v-bar--underline"
    color="transparent"
    :clipped-left="$vuetify.rtl"
    :clipped-right="!$vuetify.rtl"
    height="70"
    flat
  >
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" id="drawer-toggle-btn" />
    <drawer-toggle class="hidden-sm-and-down" />

    <v-toolbar-title class="font-weight-light text-h5" v-text="name" />

    <v-spacer />

    <home-button />
  </v-app-bar>
</template>

<script>
import HomeButton from "./HomeButton.vue";
import DrawerToggle from "./DrawerToggle.vue";

import { mapFields } from "vuex-map-fields";
export default {
  components: { HomeButton, DrawerToggle },
  name: "AppTopBar",
  computed: {
    ...mapFields(["drawer"]),
    name() {
      return this.$route.name;
    },
  },
};
</script>

<style>
</style>