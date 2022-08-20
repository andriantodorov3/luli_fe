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
          subject: "The Frontend  app is built with vue",
          title: "Why Vue?",
          text: 'Fast, lilghtweight and easy to code, a good comparison can be found <a href="https://v2.vuejs.org/v2/guide/comparison.html" target="_blank">here</a>',
        },
        {
          subject: "Templates and UI kit is using vuetify",
          title: "Why Vuetify",
          text: 'Packs together material design, a lot of good looking components and layout classes. good article  can be found <a target="_blank" href="https://vuetifyjs.com/en/introduction/why-vuetify/#why-vuetify3f">here</a>',
        },
        {
          subject: "Validation",
          title: "",
          text: "Form validation is done on the fly via vuelidate. In case initial checks pass, a backend request is issued and in case of errors, they get passed back to the forms component with remapped values from the backend errors array",
        },
        {
          subject: "Template and layout",
          title: "",
          text: "Layout is using vuetify's grid system, based on flexbox. Even though not a requirement, current template comes with a side bar (can be minimized), top bar, and main container. This layout is responsive - you can check it on a mobile screen",
        },
        {
          subject: "Store (vuex)",
          title: "",
          text: "Similar to redux, vue comes with vuex by default. Even though the application does not require it (components are not nested too deep and the state can be set in a higher component), the examples in the code show a good use case of this model. Currently in use for the button to minimize the menu (unrelated components) and as an event bus to publish notifications ",
        },
        {
          subject: "Router",
          title: "",
          text: "Another nice-to-have feature added here. Vue's router is very similar to react's. Main difference is that in vue, the router (just like other plugins) extends the vue object and is directly accessible from any component",
        },
        {
          subject: "API requests",
          title: "",
          text: "are using axios.  2 types of errors are handled - backend errors (validation ones get passed back to the form component ) and general request errors( go through the event bus to a notification component)",
        },
        {
          subject: "Enhancements",
          title: "",
          text: "More things could be added like - animations, background images, etc",
        },
      ],
    };
  },
};
</script>
