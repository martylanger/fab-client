<template>
  <div class="the-board">

    <div class="row tokens">
    </div>

    <div class="row pointCards">
      <div class="col-2 deck point-deck"></div>
      <PointCard space=0 :pointCard="this.board.pointCards[0]" />
      <PointCard space=1 :pointCard="this.board.pointCards[1]" />
      <PointCard space=2 :pointCard="this.board.pointCards[2]" />
      <PointCard space=3 :pointCard="this.board.pointCards[3]" />
      <PointCard space=4 :pointCard="this.board.pointCards[4]" />
    </div>

    <div class="row tradingCards">
      <!-- <div class="col-2 deck trading-deck"></div> -->
      <TradingCard space=0 :tradingCard="this.board.tradingCards[0]" :fabrics="this.board.freeFabrics[0]" />
      <TradingCard space=1 :tradingCard="this.board.tradingCards[1]" :fabrics="this.board.freeFabrics[1]" />
      <TradingCard space=2 :tradingCard="this.board.tradingCards[2]" :fabrics="this.board.freeFabrics[2]" />
      <TradingCard space=3 :tradingCard="this.board.tradingCards[3]" :fabrics="this.board.freeFabrics[3]" />
      <TradingCard space=4 :tradingCard="this.board.tradingCards[4]" :fabrics="this.board.freeFabrics[4]" />
      <TradingCard space=5 :tradingCard="this.board.tradingCards[5]" />
    </div>
  </div>
</template>

<script>
import TradingCard from "./TradingCard.vue"
import PointCard from "./PointCard.vue"

export default {
  name: "TheBoard",
  components: {
    PointCard, TradingCard
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
