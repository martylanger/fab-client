<template>
  <div class="col-2 trading-card-space">
    <TradingCard :tradingCard="this.props.tradingCard"/>
  </div>
</template>

<script>
import TradingCard from "./TradingCard.vue"

export default {
  name: "TradingCardSpace",
  props: {
    space: {
      type: Number,
      required: true
    }
    fabrics: {
      type: Array,
      required: true
    },
    tradingCard: {
      type: Object,
      required: false
    }
  }
}
</script>

<style>
.trading-card-space {
  border: 5px solid #1C6EA4;
  border-radius: 10px;
}
/* use $zindex to place fabrics on the card */
</style>
