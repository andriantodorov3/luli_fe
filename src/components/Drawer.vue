<template>
  <v-navigation-drawer
    id="default-drawer"
    :right="$vuetify.rtl"
    :mini-variant.sync="mini"
    mini-variant-width="80"
    v-model="drawer"
    app
    width="260"
  >
    <div class="px-2">
      <drawer-header />

      <v-divider class="mx-3 mb-2" />

      <v-list>
        <v-list-item-group v-model="selectedItem" color="primary">
          <template v-for="(item, i) in menuItems">
            <v-list-item :to="{ path: item.path }" :key="i">
              <v-list-item-action>
                <v-icon>{{ item.action }}</v-icon>
              </v-list-item-action>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import DrawerHeader from "./DrawerHeader.vue";

export default {
  components: { DrawerHeader },
  name: "DefaultDrawer",

  computed: {
    ...mapFields(["mini", "drawer"]),
  },
  data() {
    return {
      selectedItem: 1,
      menuItems: [
        {
          action: "mdi-view-dashboard",
          active: false,
          title: "Stock",
          path: "/",
        },
        {
          action: "mdi-home",
          active: false,
          title: "About the frontend",
          path: "/feinfo",
        },
        {
          action: "mdi-folder-open",
          active: false,
          title: "About the backend",
          path: "/beinfo",
        },
      ],
    };
  },
};
</script>

<style lang="sass">
.v-list-item
  margin-bottom: 8px

.v-list-item::before,
.v-list-item::after
  display: none

.v-list-group__header__prepend-icon,
.v-list-item__icon
  margin-top: 12px
  margin-bottom: 12px
  margin-left: 4px
</style>
