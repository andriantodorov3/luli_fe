<template>
  <v-app>
    <notification />
    <app-top-bar />
    <drawer />
    <v-main>
      <v-container fluid>
        <router-view :key="$route.path" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppTopBar from "./components/AppTopBar.vue";
import Drawer from "./components/Drawer.vue";
import Notification from "./components/Notification.vue";
export default {
  name: "App",
  components: { AppTopBar, Drawer, Notification },
};
</script>
