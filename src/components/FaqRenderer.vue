<template>
  <v-list>
    <v-list-item-group color="primary">
      <v-list-item v-for="(item, i) in items" :key="i">
        <v-list-item-content>
          <v-list-item-title v-text="item.subject"></v-list-item-title>
          <v-list-item-subtitle
            class="text--primary"
            v-text="item.title"
          ></v-list-item-subtitle>

          <v-list-item-subtitle
            class="text--primary"
            v-text="item.text"
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: "FaqRenderer",
  props: {
    items: {
      type: Array,
      required: true
    },
  },
};
</script>

<style>
</style>