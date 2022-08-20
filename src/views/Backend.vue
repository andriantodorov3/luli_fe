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
          subject: "Backend is built with Nest.js",
          title: "Why Nest?",
          text: 'because nest is lightweight, simple and let\'s you code using SOLID and 12-factor applications principles.  More here <a href="https://enlear.academy/why-you-should-use-nestjs-as-your-backend-framework-bd1ff1acce5d" target="_blank">here</a>',
        },
        {
          subject: 'More',
          title: "",
          text: 'More information about the backend can be found in the backend repo <a href="https://github.com/andriantodorov3/luli_be" target="_blank">Readme</a>',
        },
      ],
    };
  },
};
</script>
