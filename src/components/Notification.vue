  <template>
  <v-snackbar v-model="shown" :timeout="timeout" id="notification-container">
    {{ msg }}

    <template v-slot:action="{ attrs }">
      <v-btn color="red" text v-bind="attrs" @click="shown = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
  name: "notification",
  data() {
    return {
      msg: "",
      shown: false,
      l_autoclose: this.autoclose,
      l_type: this.type,
    };
  },

  props: {
    timeout: {
      type: Number,
      default: 30000,
    },
    autoclose: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: "confirm",
    },
  },
  computed: {
    ...mapFields(["bus"]),

    mainklass() {
      return this.l_type;
    },
  },
  watch: {
    msg() {
      this.show();
    },
  },
  mounted() {
    this.bus.$on("shownotification", (payLoad) => {
      this.msg = payLoad.msg;
      this.l_autoclose =
        payLoad.autoclose !== undefined ? payLoad.autoclose : true;
      if (payLoad.type != undefined) {
        this.l_type = payLoad.type;
      }
      this.show();
    });
  },

  methods: {
    show() {
      this.shown = true;
      let src = this;

      if (this.l_autoclose) {
        setTimeout(function () {
          src.shown = false;
        }, src.timeout);
      }
    },
  },
};
</script>

<style>
</style>
