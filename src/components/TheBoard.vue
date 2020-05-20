<template>
  <div class="the-board">

    <div class="row tokens">
    </div>

    <div class="row pointCards">
      <div class="col-2 deck point-deck"></div>
      <PointCardSpace space=0 :pointCard="pointCard0" />
      <PointCardSpace space=1 :pointCard="pointCard1" />
      <PointCardSpace space=2 :pointCard="pointCard2" />
      <PointCardSpace space=3 :pointCard="pointCard3" />
      <PointCardSpace space=4 :pointCard="pointCard4" />
    </div>

    <div class="row tradingCards">
      <!-- <div class="col-2 deck trading-deck"></div> -->
      <TradingCardSpace space=0 :tradingCard="tradingCard0" :fabrics="fabrics0" />
      <TradingCardSpace space=1 :tradingCard="tradingCard1" :fabrics="fabrics1" />
      <TradingCardSpace space=2 :tradingCard="tradingCard2" :fabrics="fabrics2" />
      <TradingCardSpace space=3 :tradingCard="tradingCard3" :fabrics="fabrics3" />
      <TradingCardSpace space=4 :tradingCard="tradingCard4" :fabrics="fabrics4" />
      <TradingCardSpace space=5 :tradingCard="tradingCard5" />
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
  },
  data () {
    return {
      tradingCard0: this.board.tradingCards[0],
      tradingCard1: this.board.tradingCards[1],
      tradingCard2: this.board.tradingCards[2],
      tradingCard3: this.board.tradingCards[3],
      tradingCard4: this.board.tradingCards[4],
      tradingCard5: this.board.tradingCards[5],
      pointCard0: this.board.pointCards[0],
      pointCard1: this.board.pointCards[1],
      pointCard2: this.board.pointCards[2],
      pointCard3: this.board.pointCards[3],
      pointCard4: this.board.pointCards[4]
    }
  }
}
</script>
