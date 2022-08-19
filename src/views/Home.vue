<template>
  <v-container class="new-capsule-wrapper lighten-5" :fluid="true">
    <v-row justify="space-around">
      <v-col col="6" sm="12" md="8">
        <v-card class="search-page elevation-5">
          <v-card-title>Stocks analyst</v-card-title>
          <v-card-text>
            <p>
              Use the form below to see how much money you could have made by
              buying and selling stocks X.<br />
              You need to provide the amount of money you are willing to invest
              and the timeframe you are interested in.<br />
              Provided results will show you the best possible time for buying
              (in the past) and selling and will calculate the profit you could
              have made.
            </p>
            <stock-search-form
              :loading="searching"
              @search="search"
              :start_errors="start_errors"
              :end_errors="end_errors"
            />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col col="6" sm="12" md="4">
        <v-card class="search-page-results elevation-5">
          <v-card-title>Results</v-card-title>
          <v-card-text>
            <p>Use the form on the left side to define your criteria</p>

            <search-results
              v-if="searchSuccess"
              v-bind="searchResults"
              :funds="searchPayload.funds"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import StockSearchForm from "../components/StockSearchForm.vue";

import { mapGetters } from "vuex";
import { searchStocks } from "@/_api/backend";
import SearchResults from "./SearchResults.vue";
export default {
  name: "Home",
  components: {
    StockSearchForm,
    SearchResults,
  },

  computed: {
    ...mapGetters(["bus"]),
  },
  data() {
    return {
      searching: false,
      searchResults: null,
      searchSuccess: false,
      searchPayload: null,
      start_errors: [],
      end_errors: [],
    };
  },

  methods: {
    async search(payload) {
      this.searching = true;
      this.searchPayload = payload;

      try {
        const apiData = await searchStocks({start_time: payload.start_time, end_time: payload.end_time});
        this.searchResults = apiData.data;
        this.searchSuccess = true;

        this.start_errors = [];
        this.end_errors = [];

        //handle errors
        this.searching = false;
      } catch (error) {
        this.searchSuccess = false;
        if (
          error?.response?.data?.statusCode === 400 &&
          error?.response?.data?.success === false
        ) {
          const backend_errors = error.response.data.error.errors;
          if (backend_errors.start_time != undefined) {
            this.start_errors = backend_errors.start_time;
          }
          if (backend_errors.end_time != undefined) {
            this.end_errors = backend_errors.end_time;
          }
          //backend API returns payload with errors
        } else {
          this.bus.$emit("shownotification", {
            msg: "Cannot reach backend, error: " + error,
            type: "error",
          });
        }
        this.searching = false;
      }
    },
  },
};
</script>
