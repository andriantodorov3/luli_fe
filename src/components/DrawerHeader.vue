<template>
  <v-list-item class="mb-0 justify-space-between pl-3">
    <v-list-item-avatar>
      <v-img :src="require('@/assets/favicon.png')" />
    </v-list-item-avatar>

    <v-list-item-content class="pl-2">
      <v-list-item-title class="">
        <strong class="mr-1 font-weight-black">LucidLink</strong>

      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "DrawerHeader",
};
</script>
