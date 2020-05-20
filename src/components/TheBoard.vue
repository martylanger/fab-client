<template>
  <div class="the-board">

    <div class="row tokens">
    </div>

    <div class="row pointCards">
      <div class="col-2 deck point-deck"></div>
      <PointCardSpace space=0 :pointCard="this.board.pointCards[0]" />
      <PointCardSpace space=1 :pointCard="this.board.pointCards[1]" />
      <PointCardSpace space=2 :pointCard="this.board.pointCards[2]" />
      <PointCardSpace space=3 :pointCard="this.board.pointCards[3]" />
      <PointCardSpace space=4 :pointCard="this.board.pointCards[4]" />
    </div>

    <div class="row tradingCards">
      <!-- <div class="col-2 deck trading-deck"></div> -->
      <TradingCardSpace space=0 :tradingCard="this.board.tradingCards[0]" :fabrics="this.board.freeFabrics[0]" />
      <TradingCardSpace space=1 :tradingCard="this.board.tradingCards[1]" :fabrics="this.board.freeFabrics[1]" />
      <TradingCardSpace space=2 :tradingCard="this.board.tradingCards[2]" :fabrics="this.board.freeFabrics[2]" />
      <TradingCardSpace space=3 :tradingCard="this.board.tradingCards[3]" :fabrics="this.board.freeFabrics[3]" />
      <TradingCardSpace space=4 :tradingCard="this.board.tradingCards[4]" :fabrics="this.board.freeFabrics[4]" />
      <TradingCardSpace space=5 :tradingCard="this.board.tradingCards[5]" />
    </div>
  </div>
</template>

<script>
import TradingCardSpace from "./TradingCardSpace.vue"
import PointCardSpace from "./PointCardSpace.vue"

export default {
  name: "TheBoard",
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
</script>
