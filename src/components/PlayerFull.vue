<template>
  <div class="player-full col-4" v-bind:class="myTurn">
    <h4>{{ player.name }}</h4>
    <p>Fabrics: {{ player.fabrics }}</p>
    <TradingCard
      v-for="tradingCard in this.player.tradingCards"
      :key="tradingCard.id"
      :tradingCard="tradingCard"
    />
    <PointCard
      v-for="pointCard in this.player.pointCards"
      :key="pointCard.id"
      :pointCard="pointCard"
    />
    <!-- <ul>
      <li>Fabrics: {{ player.fabrics }}</li>
      <li>Trading Cards: {{ player.tradingCards }}</li>
      <li>Point Cards: {{ player.pointCards }}</li>
    </ul> -->
  </div>
</template>

<script>
import TradingCard from "./TradingCard.vue"
import PointCard from "./PointCard.vue"
// import { store } from "@/store/index.js"

export default {
  name: "PlayerFull",
  components: {
    TradingCard, PointCard
  },
  props: {
    player: {
      type: Object,
      required: true
    },
    whoseTurn: {
      type: Object
    }
  },
  computed: {
    myTurn: function () {
      if (this.player === this.whoseTurn) {
        return 'its-my-turn'
      } else {
        return ''
      }
    }
  }
}
</script>

<style>
.its-my-turn {
  background-color: beige;
}
</style>
