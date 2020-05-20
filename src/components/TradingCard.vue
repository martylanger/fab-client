<template>
  <div class="trading-card">
    <h6 v-if="this.tradingCard.upgrade">Upgrade {{ this.tradingCard.upgrade }}</h6>
    <div v-else>
      <h6>{{ this.tradingCard.give }}</h6>
      <b-icon-arrow-down></b-icon-arrow-down>
      <h6>{{ this.tradingCard.get }}</h6>
    </div>
  </div>
</template>

<script>
// import TradingCard from "./TradingCard.vue"

export default {
  name: "TradingCard",
  // components: {
  //   TradingCard
  // },
  props: {
    space: {
      type: String,
      required: false
    },
    fabrics: {
      type: Array,
      required: false
    },
    tradingCard: {
      type: Object,
      required: false
    }
  }
}
</script>

<style>
.trading-card {
  border: 5px solid #1C6EA4;
  border-radius: 10px;
  height: 120px;
}
/* use $zindex to place fabrics on the card */
</style>
