<template>
  <section class="search-results">
    <table>
      <tr>
        <th>Best time to buy</th>
        <td>{{ buy_point_as_date }}</td>
      </tr>
      <tr>
        <th>Best time to sell</th>
        <td>{{ sell_point_as_date }}</td>
      </tr>
      <tr>
        <th>Stocks count</th>
        <td>{{ stocksCount }}</td>
      </tr>

      <tr>
        <th>Stocks best price for buying </th>
        <td>{{ buy_point_price }} USD</td>
      </tr>
 
      <tr>
        <th>Stocks best price for selling </th>
        <td>{{ sell_point_price }} USD</td>
      </tr>
 
      <tr>
        <th>Your funds</th>
        <td>{{ funds }} USD</td>
      </tr>

      <tr>
        <th>You invest</th>
        <td>{{ investition }} USD</td>
      </tr>

      <tr>
        <th>Your profit</th>
        <td>{{ profit }} USD</td>
      </tr>
    </table>
  </section>
</template>

<script>
import moment from "moment";
export default {
  name: "SearchResults",
  props: {
    date_format: {
      type: String,
      rqeuired: false,
      default: "MMMM Do YYYY, h:mm:ss a",
    },
    buy_point: {
      type: Number,
      required: true,
    },
    sell_point: {
      type: Number,
      required: true,
    },

    buy_point_price: {
      type: Number,
      required: true,
    },
    sell_point_price: {
      type: Number,
      required: true,
    },
    funds: {
      type: Number,
      required: true,
    },
  },
  computed: {
    investition()
    {
      return this.funds * this.stocksCount;
    },
    buy_point_as_date() {
      return moment.utc(this.buy_point * 1000).format(this.date_format);
    },
    sell_point_as_date() {
      return moment(this.sell_point * 1000).format(this.date_format);
    },
    stocksCount() {
      return (this.funds / this.buy_point_price).toFixed(2)
    },
    profit() {
      return (this.stocksCount * this.sell_point_price - this.funds).toFixed(2);
    },
  },
};
</script>

<style>
</style>