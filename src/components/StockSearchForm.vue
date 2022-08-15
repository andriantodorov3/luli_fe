<template>
  <v-form ref="form" lazy-validation>
    <v-container class="new-capsule-wrapper lighten-5" :fluid="false">
      <v-row class="space-around align-center justify-space-around">
        <v-col lg="3" sm="6" md="4" class="pt-2">
          <v-icon class="mr-2">mdi-clock-time-four-outline</v-icon>
          <label> Select timeframe </label>
        </v-col>
        <v-col lg="9" sm="6" md="8">
          <v-text-field
            v-model="date_picker_start"
            label="Select start date"
            placeholder=""
            outlined
            dense
            class="d-inline-flex ml-2"
            type="datetime-local"
            :error-messages="[...start_errors, ...datePickerStartError]"
            @input="$v.date_picker_start.$touch()"
            @blur="$v.date_picker_start.$touch()"
            id="date_picker_start"
          ></v-text-field>

          <v-text-field
            v-model="date_picker_end"
            label="Select end date"
            placeholder=""
            outlined
            dense
            class="d-inline-flex ml-2"
            type="datetime-local"
            :error-messages="[...end_errors, ...datePickerEndError]"
            @input="$v.date_picker_end.$touch()"
            @blur="$v.date_picker_end.$touch()"
            id="date_picker_end"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="start" align="start">
        <v-col lg="12" sm="12" md="12">
          <v-text-field
            step="1"
            min="1"
            v-model.number="funds"
            label="Enter funds"
            placeholder="Funds amount"
            outlined
            dense
            type="number"
            suffix="USD"
            id="funds_input"
            :error-messages="fundsError"
            @input="$v.funds.$touch()"
            @blur="$v.funds.$touch()"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row justify="start" align="start">
        <v-col lg="12" sm="12" md="12">
          <v-btn
            class="submit-btn"
            x-large
            color="blue"
            @click="validate"
            :disabled="loading"
            id="search-btn"
          >
            <template v-if="loading">
              <loading>Loading...</loading>
            </template>
            <template v-else> Search </template></v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import moment from "moment";
import { validationMixin } from "vuelidate";
import { required, minValue } from "vuelidate/lib/validators";

export default {
  name: "StockSearchForm",
  mixins: [validationMixin],
  props: {
    end_errors: {
      type: Array,
    },
    start_errors: {
      type: Array,
    },

    loading: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  components: {
    Loading: () => import("@/components/Loading"),
  },

  data() {
    return {
      funds: 1,
      date_picker_start: null,
      date_picker_end: null,
    };
  },
  methods: {
    async validate() {
      this.$v.$touch();

      if (this.formIsValid) {
        this.$emit("search", {
          start_time: moment(this.date_picker_start).unix(),
          end_time: moment(this.date_picker_end).unix(),
          funds: this.funds,
        });
      }
    },
  },
  computed: {
    formIsValid() {
      return this.$v.$invalid === false;
    },
    datePickerEndError() {
      let errors = [];
      if (
        !this.$v.date_picker_end.$dirty ||
        !this.$v.date_picker_end.$invalid
      ) {
        return errors;
      }

      if (!this.$v.date_picker_end.required) {
        errors.push("Please enter end time");
      }
      !this.$v.date_picker_end.maxValue &&
        errors.push(`End date must be past start date`);
      return errors;
    },

    datePickerStartError() {
      let errors = [];
      if (
        !this.$v.date_picker_start.$dirty ||
        !this.$v.date_picker_start.$invalid
      ) {
        return errors;
      }

      if (!this.$v.date_picker_start.required) {
        errors.push("Please enter start time");
      }
      !this.$v.date_picker_start.minValue &&
        this.date_picker_end != undefined &&
        errors.push(`Start date must be before end date`);

      return errors;
    },
    fundsError() {
      let errors = [];
      if (!this.$v.funds.$dirty || !this.$v.funds.$invalid) {
        return errors;
      }

      if (!this.$v.funds.required) {
        errors.push("Funds amount is required ");
      }
      !this.$v.funds.minValue && errors.push(`Funds can be at least 1 USD`);
      return errors;
    },
  },
  validations() {
    let v = {
      funds: {
        required,
        minValue: minValue(1),
      },
      date_picker_start: {
        required,
        minValue(val, { date_picker_end }) {
          return new Date(val) < new Date(date_picker_end);
        },
      },
      date_picker_end: {
        required,

        maxValue(val, { date_picker_start }) {
          return new Date(val) > new Date(date_picker_start);
        },
      },
    };

    return v;
  },
};
</script>

<style>
</style>