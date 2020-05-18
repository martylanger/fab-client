<template>
  <div class="fab">
    <h1>This is the TheGame.vue template</h1>
    <div v-if="isPregame()">
      <input
      name="playerName"
			v-model="newFabPlayer"
			placeholder="FabPlayer Name"
			@keydown.enter="addFabPlayer"
			type="text"
			class="input"
  		>
      <ul v-if="players.length">
  			<FabPlayer
  				v-for="player in players"
  				:key="player.id"
  				:player="player"
  				@remove="removeFabPlayer"
  			/>
  		</ul>
  		<p v-else>
  			No players entered. Start by adding a new player.
  		</p>
      <button v-on:click="createTheGame">Start New TheGame</button>
    </div>

    <div v-if="store.getters.phase === 'gamePlay'">
      <FabPlayer v-for="player in players" :key="player.playerId"></FabPlayer>
      <TheBoard></TheBoard>
    </div>

  </div>
</template>

<script>
import store from "@/store/index"
import TheBoard from "./TheBoard.vue"
import FabPlayer from "./FabPlayer.vue"
// import TradingCard from "./TradingCard.vue"
// import PointCard from "./PointCard.vue"

let nextFabPlayerId = 0

export default {
  name: "TheGame",
  components: {
    // TheBoard, FabPlayer, TradingCard, PointCard
    TheBoard, FabPlayer
  },
  data () {
    return {
      whoseTurn: store.getters.whoseTurn,
      players: [],
      newFabPlayer: '',
      board: {}
    }
  },
  props: {
    // msg: String
  },
  methods: {
    addFabPlayer () {
      const trimmedText = this.newFabPlayer.trim()
      if (trimmedText) {
        this.players.push({
          id: nextFabPlayerId++,
          name: trimmedText,
          spices: [],
          pointCards: [],
          tradingCards: []
        })
      this.newFabPlayer = ''
      }
    },
    removeFabPlayer (idToRemove) {
			this.players = this.players.filter(player => {
				return player.id !== idToRemove
			})
		},
    createTheGame () {
      // Randomize players[] in-place using Durstenfeld shuffle algorithm
      // Thanks to https://stackoverflow.com/a/12646864
      for (let i = this.players.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        let temp = this.players[i]
        this.players[i] = this.players[j]
        this.players[j] = temp
      }
      this.store.commit('setWhoseTurn', this.players[0])

    }
  },
  computed: {
    isPregame () {
      return store.getters.phase === "pregame"
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
