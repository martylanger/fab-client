<template>
  <div class="fab">

    <div v-if="Store.state.phase === 'pregame'">
      <input
			v-model="newPlayer"
			placeholder="Player Name"
			@keydown.enter="addPlayer"
			type="text"
			class="input"
  		>
      <ul v-if="players.length">
  			<Player
  				v-for="player in players"
  				:key="player.id"
  				:player="player"
  				@remove="removePlayer"
  			/>
  		</ul>
  		<p v-else>
  			No players entered. Start by adding a new player.
  		</p>
      <button v-on:click="createGame">Start New Game</button>
    </div>

    <div v-if="Store.state.phase === 'gamePlay'">
      <Player v-for="player in players" :key="player.playerId"></Player>
      <Board></Board>
    </div>

  </div>
</template>

<script>
import store from "@/store/index.js"
import Board from "./Board.vue"
import Player from "./Player.vue"
import TradingCard from "./TradingCard.vue"
import PointCard from "./PointCard.vue"

let nextPlayerId = 0

export default {
  name: "Game",
  components: {
    Board, Player, TradingCard, PointCard
  },
  data () {
    return {
      whoseTurn: store.state.whoseTurn,
      players: [],
      newPlayer: '',
      board: {}
    }
  },
  props: {
    // msg: String
  },
  methods: {
    addPlayer () {
      const trimmedText = this.newPlayer.trim()
      if (trimmedText) {
        this.players.push({
          id: nextPlayerId++,
          name: trimmedText,
          spices: [],
          pointCards: [],
          tradingCards: []
        })
      this.newPlayer = ''
      }
    },
    removePlayer (idToRemove) {
			this.players = this.players.filter(player => {
				return player.id !== idToRemove
			})
		}
    createGame () {
      // Randomize players[] in-place using Durstenfeld shuffle algorithm
      // Thanks to https://stackoverflow.com/a/12646864
      for (let i = players.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        let temp = this.players[i]
        this.players[i] = this.players[j]
        this.players[j] = temp
      }
      store.mutations.setWhoseTurn(this.players[0])
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
