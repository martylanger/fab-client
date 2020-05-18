<template>
  <div class="player">
    <div v-if="Store.state.phase === 'pregame'">
      <li>
        {{ player.name }}
        <button @click="$emit('remove', player.id)">
          X
        </button>
      </li>
    </div>
    <div v-if="Store.state.phase === 'gamePlay'">
      <ul>
        <li>{{ this.props.player.name }}</li>
        <li>{{ this.props.player.spices }}</li>
        <li>{{ this.props.player.tradingCards }}</li>
        <li>{{ this.props.player.pointCards }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// import TradingCard from "./TradingCard.vue"
// import PointCard from "./PointCard.vue"
import { store } from "@/store/index.js"

export default {
  // components: {
  //   TradingCard, PointCard
  // },
  // data () {
  //   return {
  //     player: this.props.player
  //   }
  // },
  props: {
    player: {
      type: Object,
      required: true
    }
  }
}
</script>
