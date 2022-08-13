<template>
  <div>
    <faq-renderer :items="items" />
  </div>
</template>

<script>
import FaqRenderer from "../components/FaqRenderer.vue";
export default {
  name: "backend",
  components: {
    FaqRenderer,
  },
  data() {
    FaqRenderer;
    return {
      items: [
        {
          subject: "backend is built with vue",
          title: "Why Vue",
          text: "Because...",
        },
      ],
    };
  },
};
</script>
