<template>
  <div class="loading pa-10">
    <v-progress-circular indeterminate color="purple" class="mr-3"></v-progress-circular>
    <slot>Loading...</slot>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style>
.loading {
  text-align: center;
}
</style>