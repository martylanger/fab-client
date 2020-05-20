<template>
  <div class="player-full">
    <p>{{ player.name }}</p>
    <ul>
      <li>Fabrics: {{ player.fabrics }}</li>
      <li>Trading Cards: {{ player.tradingCards }}</li>
      <li>Point Cards: {{ player.pointCards }}</li>
    </ul>
  </div>
</template>

<script>
// import TradingCard from "./TradingCard.vue"
// import PointCard from "./PointCard.vue"
// import { store } from "@/store/index.js"

export default {
  name: "PlayerFull",
  props: {
    player: {
      type: Object,
      required: true
    }
  }
}
</script>
