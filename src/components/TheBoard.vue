<template>
  <div class="the-board">

    <div class="row tokens">
    </div>

    <div class="row pointCards">
      <div class="col-2 deck point-deck"></div>
      <PointCardSpace space="0" :pointCardId="pointCard0" />
      <PointCardSpace space="1" :pointCardId="pointCard1" />
      <PointCardSpace space="2" :pointCardId="pointCard2" />
      <PointCardSpace space="3" :pointCardId="pointCard3" />
      <PointCardSpace space="4" :pointCardId="pointCard4" />
    </div>

    <div class="row tradingCards">
      <div class="col-2 deck trading-deck"></div>
      <TradingCardSpace space="0" :tradingCardId="tradingCard0" :fabrics="fabrics0" />
      <TradingCardSpace space="1" :tradingCardId="tradingCard1" :fabrics="fabrics1" />
      <TradingCardSpace space="2" :tradingCardId="tradingCard2" :fabrics="fabrics2" />
      <TradingCardSpace space="3" :tradingCardId="tradingCard3" :fabrics="fabrics3" />
      <TradingCardSpace space="4" :tradingCardId="tradingCard4" :fabrics="fabrics4" />
      <TradingCardSpace space="5" :tradingCardId="tradingCard5" :fabrics="fabrics" />
    </div>

  </div>
</template>

<script>
import TradingCardSpace from "./TradingCardSpace.vue"
import PointCardSpace from "./PointCardSpace.vue"

export default {
  components: {
    PointCardSpace, TradingCardSpace
  },
  props: {
    whoseTurn: {
      type: Object,
      required: false
    },
    players: {
      type: Array,
      required: true
    },
    board: {
      type: Object,
      required: true
    }
  }
}
