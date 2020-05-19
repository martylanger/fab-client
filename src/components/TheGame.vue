<template>
  <div class="fab">
    <h1>This is the Game.vue template</h1>
    <!-- <p>phase is {{ phase }}</p>
    <p>whoseTurn is {{ whoseTurn }}</p>
    <p>The players are {{ players }}</p>
    <p>players.length: {{ players.length }}</p> -->
    <div v-if="this.phase === 'pregame'">
      <input
      name="playerName"
			v-model="newPlayer"
			placeholder="Player Name"
			@keydown.enter="addPlayer"
			type="text"
			class="input"
  		>
      <ul v-if="players.length">
        <!-- <p>My 1st if works</p> -->
  			<PlayerName
  				v-for="player in players"
  				:key="player.id"
  				:player="player"
          :phase="phase"
  				@remove="removePlayer"
  			/>
  		</ul>
  		<p v-else>
  			No players entered. Start by adding a new player.
  		</p>
      <button v-on:click="createGame">Start New Game</button>
    </div>

    <div v-if="this.phase === 'gamePlay'">
      <PlayerFull
      v-for="player in players"
      :key="player.id"
      :player="player"
    />
      <TheBoard></TheBoard>
    </div>

  </div>
</template>

<script>
// import store from "@/store/index"
import TheBoard from "./TheBoard.vue"
import PlayerName from "./PlayerName.vue"
import PlayerFull from "./PlayerFull.vue"
// import TradingCard from "./TradingCard.vue"
// import PointCard from "./PointCard.vue"

let nextPlayerId = 0
let phase = "pregame"
let whoseTurn = ''

export default {
  name: "TheGame",
  components: {
    // TheBoard, PlayerName, PlayerFull, TradingCard, PointCard
    TheBoard, PlayerName, PlayerFull
  },
  data () {
    return {
      phase: phase,
      whoseTurn: whoseTurn,
      players: [],
      newPlayer: '',
      board: {}
    }
  },
  props: {

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
		},
    createGame () {
      // Randomize players[] in-place using Durstenfeld shuffle algorithm
      // Thanks to https://stackoverflow.com/a/12646864
      for (let i = this.players.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        let temp = this.players[i]
        this.players[i] = this.players[j]
        this.players[j] = temp
      }
      // this.store.commit('setWhoseTurn', this.players[0])
      this.whoseTurn = this.players[0].name
      this.phase = 'gamePlay'
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
