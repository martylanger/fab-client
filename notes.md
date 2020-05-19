// The data that I will need to hold for a game:
game {
  data {
    whoseTurn,
    board {
      tradingCardSpaces {
        tradingCard,
        fabrics { linen 1, wool 2, silk 3, cashmere 4 }
      },
      pointCardSpaces {
        pointCard,
        tokens
      }
    },
    players {
      names,
      fabrics,
      pointCards
      tradingCards
    },
    tradingCards {
      fabrics,
      action,
      owner,
      inHand
    },
    pointCards {
      value,
      recipe,
      token,
      owner
    }
  },
  // The actions that I need
  actions {
    getTradingCard,
    getPointCard,
    playTradingCard,
    rest
  }
}
