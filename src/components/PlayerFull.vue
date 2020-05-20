<template>
  <div class="player-full col-3">
    <h2 v-if="this.myTurn">{{ player.name }}</h2>
    <p v-else>{{ player.name }}</p>
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
      return this.player === this.whoseTurn
    }
  }
}
</script>
