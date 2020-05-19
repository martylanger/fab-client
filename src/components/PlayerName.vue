<template>
  <div class="player-name">
    <!-- <div v-if="this.phase === 'pregame'"> -->
      <li>
        {{ player.name }}
        <button @click="$emit('remove', player.id)">
          X
        </button>
      </li>
    <!-- </div>
    <div v-if="this.props.phase === 'gamePlay'">
      <ul>
        <li>{{ this.props.player.name }}</li>
        <li>{{ this.props.player.spices }}</li>
        <li>{{ this.props.player.tradingCards }}</li>
        <li>{{ this.props.player.pointCards }}</li>
      </ul>
    </div> -->
  </div>
</template>

<script>
// import TradingCard from "./TradingCard.vue"
// import PointCard from "./PointCard.vue"
// import { store } from "@/store/index.js"

// let phase = this.props

export default {
  name: "PlayerName",
  // components: {
  //   TradingCard, PointCard
  // },
  data () {
    return {
      // player: this.props.player,
    }
  },
  props: {
    phase: {
      type: String,
      required: false
    },
    player: {
      type: Object,
      required: true
    }
  // }
  // computed: {
  //   isPregame () {
  //     return phase === "pregame"
  //   }
  }
}
</script>
