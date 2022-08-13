<template>
  <v-btn class="ml-3 mr-4" elevation="1" fab small @click="mini = !mini" id="mini-toggler">
    <v-icon>
      {{ mini ? "mdi-format-list-bulleted" : "mdi-dots-vertical" }}
    </v-icon>
  </v-btn>
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
  name: "DrawerToggle",
  computed: {
    ...mapFields(["mini"]),
  },
};
</script>
