<template>
  <div class="fab">
    <div class="container">
      <div class="row">
        <h1 class="col-12">Fabric Trader</h1>
      </div>

      <div class="row">
        <div class="col-12" v-if="this.phase === 'pregame'">
          <input
            name="playerName"
      			v-model="newPlayer"
      			placeholder="Player Name"
      			@keydown.enter="addPlayer"
      			type="text"
      			class="input"
      		>
          <h2>Players</h2>
          <ul v-if="players.length">
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
        </div>  <!-- pregame -->
      </div>  <!-- row -->
    </div>

    <div v-if="this.phase === 'gamePlay'">
      <div class="container-fluid">
        <div class="row">
          <PlayerFull
            v-for="player in players"
            :key="player.id"
            :player="player"
            :whoseTurn="whoseTurn"
          />
        </div>
        <TheBoard
          :whoseTurn="whoseTurn"
          :players="players"
          :board="board"
        />
      </div>  <!-- container -->
    </div>  <!-- gameplay -->
  </div>  <!-- fab -->
</template>

<script>
import TheBoard from "./TheBoard.vue"
import PlayerName from "./PlayerName.vue"
import PlayerFull from "./PlayerFull.vue"

let nextPlayerId = 0
let phase = "pregame"
let whoseTurn = {}
let board = {
  tradingCards: [],
  pointCards: [],
  freeFabrics: [null, null, null, null, null]
}

// All trading cards specify what the player gives and what they get in return
// The tradingCardDeck array contains, for each card, a give array and a get array
// A handful of tradingCards simply give the player the indicated fabrics
  // For these cards the give array is empty
// In hindsight, I probably ought to have created an object with a constructor function for all these
const tradingCardDeck = [
  [[], [1, 1, 1]],
  [[1, 1, 1], [4]],
  [[1, 1], [2, 2]],
  [[2, 2, 2], [4, 4]],
  [[1, 1, 1, 1], [3, 3]],
  [[4], [3, 2, 1]],
  [[1, 1, 1, 1, 1], [3, 3, 3]],
  [[3, 3], [4, 2, 1, 1]],
  [[], [2, 1, 1]],
  [[4, 4], [3, 3, 3, 2, 1]],
  [[2, 2], [4, 1, 1]],
  [[3, 3], [4, 4]],
  [[2, 1], [4]],
  [[1, 1, 1], [3, 2]],
  [[3, 3, 3], [4, 4, 4]],
  [[2, 2, 2], [3, 3, 3]],
  [[], [2, 1]],
  [[4, 4], [3, 3, 2, 2, 2]],
  [[1, 1, 1], [2, 2, 2]],
  [[2], [1, 1, 1]],
  [[4], [3, 1, 1, 1]],
  [[2, 2, 2], [4, 3, 1]],
  [[3, 3], [2, 2, 2, 1, 1]],
  [[], [4]],
  [[2, 2], [3, 1, 1, 1]],
  [[], [3]],
  [[3], [2, 2]],
  [[2, 2], [3, 3]],
  [[], [2, 2]],
  [[4], [2, 2, 2]],
  [[1, 1], [3]],
  [[3, 1, 1], [4, 4]],
  [[3], [2, 2, 1]],
  [[1, 1, 1, 1], [4, 3]],
  [[4], [2, 2, 1, 1]],
  [[2, 2, 2], [3, 3, 1, 1]],
  [[], [3, 1]],
  [[1, 1, 1, 1, 1], [4, 4]],
  [[3], [2, 1, 1, 1, 1]],
  [[3, 3], [4, 2, 2]],
  [[4], [3, 3]],
  [[], [1, 1, 1, 1]]
]

for (let i = 0; i < tradingCardDeck.length; i++) {
  board.tradingCards.push(
    {
      id: i+3,
      give: tradingCardDeck[i][0],
      get: tradingCardDeck[i][1],
      inHand: true
    }
  )
}
// Every player starts with a card that allows two single fabric upgrades
  // (i.e. 1 => 2 and 3 => 4, or 1 => 3)
// There is one card in the deck that allows three single upgrades:
board.tradingCards.push({
  id: 2,
  upgrade: 3,
  inHand: true
})

// Buying pointCards are the primary way to score points and win
// Each pointCard costs a specific set of fabrics
// The point value of each pointCard is simply the sum of its fabrics
const pointCardDeck = [
  [1, 1, 4, 4],
  [2, 2, 3, 3],
  [3, 3, 3, 3],
  [1, 1, 1, 2, 3, 4],
  [2, 2, 3, 3, 3],
  [1, 1, 3, 3, 4, 4],
  [1, 1, 4, 4, 4],
  [1, 1, 2, 4],
  [2, 2, 4, 4],
  [1, 1, 3, 3, 3],
  [3, 3, 4, 4, 4],
  [1, 1, 1, 3, 3],
  [1, 2, 3, 4, 4, 4],
  [4, 4, 4, 4, 4],
  [1, 3, 3, 4],
  [1, 1, 2, 2, 3, 3],
  [1, 1, 2, 2],
  [1, 1, 1, 4, 4],
  [2, 2, 2, 4, 4],
  [1, 2, 3, 4],
  [3, 3, 4, 4],
  [2, 2, 4, 4, 4],
  [1, 1, 2, 2, 2],
  [2, 2, 2, 2],
  [2, 2, 2, 3, 3],
  [3, 3, 3, 3, 3],
  [2, 2, 3, 3, 4, 4],
  [3, 3, 3, 4, 4],
  [2, 2, 3, 4],
  [1, 2, 3, 3, 3, 4],
  [2, 2, 2, 2, 2],
  [1, 1, 3, 3],
  [1, 1, 2, 2, 4, 4],
  [1, 2, 2, 2, 3, 4],
  [4, 4, 4, 4],
  [1, 1, 1, 2, 2]
]
pointCardDeck.forEach(card => board.pointCards.push(card))

export default {
  name: "TheGame",
  components: {
    TheBoard, PlayerName, PlayerFull
  },
  data () {
    return {
      phase: phase,
      whoseTurn: whoseTurn,
      newPlayer: '',
      players: [],
      board: board
    }
  },
  methods: {
    addPlayer () {
      const trimmedText = this.newPlayer.trim()
      if (trimmedText) {
        this.players.push({
          id: nextPlayerId++,
          name: trimmedText,
          fabrics: [],
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

      // Set whoseTurn to the first player
      this.whoseTurn = this.players[0]
      this.phase = 'gamePlay'

      for (let i = 0; i < this.players.length; i++) {
        // Add starting tradingCards to each player
        this.players[i].tradingCards.push(
          {
            id: 0,
            give: [],
            get: [1, 1],
            inHand: true
          },
          {
            id: 1,
            upgrade: 2,
            inHand: true
          }
        )
        // Add starting fabrics to each player
        switch (i) {
          case 0:
            this.players[i].fabrics.push(1, 1, 1); break
          case 1:
            this.players[i].fabrics.push(1, 1, 1, 1); break
          case 2:
            this.players[i].fabrics.push(1, 1, 1, 1); break
          case 3:
            this.players[i].fabrics.push(2, 1, 1, 1); break
          case 4:
            this.players[i].fabrics.push(2, 1, 1, 1); break
          case 5:
            this.players[i].fabrics.push(2, 2, 1, 1); break
          case 6:
            this.players[i].fabrics.push(2, 2, 1, 1); break
          case 7:
            this.players[i].fabrics.push(3, 2, 1, 1)
        }
      }

      // Randomize this.board.tradingCards[] in-place using Durstenfeld shuffle algorithm
      // Thanks to https://stackoverflow.com/a/12646864
      for (let i = this.board.tradingCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        let temp = this.board.tradingCards[i]
        this.board.tradingCards[i] = this.board.tradingCards[j]
        this.board.tradingCards[j] = temp
      }

      // Randomize this.board.pointCards[] in-place using Durstenfeld shuffle algorithm
      // Thanks to https://stackoverflow.com/a/12646864
      for (let i = this.board.pointCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        let temp = this.board.pointCards[i]
        this.board.pointCards[i] = this.board.pointCards[j]
        this.board.pointCards[j] = temp
      }
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
