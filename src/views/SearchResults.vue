<template>
  <section class="search-results">
    <table>
      <tr id="buy_point_date">
        <th>Best time to buy</th>
        <td>{{ buy_point_as_date }}</td>
      </tr>
      <tr id="sell_point_date">
        <th>Best time to sell</th>
        <td>{{ sell_point_as_date }}</td>
      </tr>
      <tr id="stocks_count">
        <th>Stocks count</th>
        <td>{{ stocksCount }}</td>
      </tr>

      <tr id="buy_point_price">
        <th>Stocks best price for buying </th>
        <td>{{ buy_point_price }} USD</td>
      </tr>
 
      <tr id="sell_point_price">
        <th>Stocks best price for selling </th>
        <td>{{ sell_point_price }} USD</td>
      </tr>
 
      <tr id="funds">
        <th>Your funds</th>
        <td>{{ funds }} USD</td>
      </tr>

      <tr id="profit">
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
    buy_point_as_date() {
      return moment.unix(this.buy_point ).format(this.date_format);
    },
    sell_point_as_date() {
      return moment.unix(this.sell_point ).format(this.date_format);
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
