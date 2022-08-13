<template>
  <div>
    <faq-renderer :items="items" />
  </div>
</template>

<script>
import FaqRenderer from "../components/FaqRenderer.vue";
export default {
  name: "frontend",
  components: {
    FaqRenderer,
  },
  data() {
    FaqRenderer;
    return {
      items: [
        {
          subject: "Frontend is built with vue",
          title: "Why Vue",
          text: "Because...",
        },
      ],
    };
  },
};
</script>
