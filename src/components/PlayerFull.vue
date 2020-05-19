<template>
  <div class="player-full">
    <ul>
      <li>{{ player.name }}</li>
      <li>{{ player.spices }}</li>
      <li>{{ player.tradingCards }}</li>
      <li>{{ player.pointCards }}</li>
    </ul>
  </div>
</template>

<script>
// import TradingCard from "./TradingCard.vue"
// import PointCard from "./PointCard.vue"
// import { store } from "@/store/index.js"

// let phase = this.props

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
