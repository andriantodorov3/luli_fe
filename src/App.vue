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
export default {
  name: "App",
  components: {
    AppTopBar: () => import("./components/AppTopBar.vue"),
    Drawer: () => import("./components/Drawer.vue"),
    Notification: () => import("./components/Notification.vue"),
  },
};
</script>
