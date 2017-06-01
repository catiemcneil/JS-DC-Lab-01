const Card = require('./card.js')

const rank = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
const suit = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
const score = {ace: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, jack: 11, queen: 12, king: 13}


class Deck {

  constructor() {
    this.cards = []
    this.hand1 = []
    this.hand2 = []
  }

  createNewDeck() {
    for ( let i = 0; i < suit.length; i++ ) {
      for ( let j = 0; j < rank.length; j++ ) {
        this.cards.push( new Card( rank[j], suit[i] ) )
      }
    }
  }

  shuffle() {
    let counter = this.cards.length

    while (counter > 0) {
        let index = Math.floor(Math.random() * counter)
        counter --

        let temp = this.cards[counter];
        this.cards[counter] = this.cards[index]
        this.cards[index] = temp
    }

    return this.cards
  }

  dealHand() {

    this.hand1 = this.cards.slice(0, 25)
    this.hand2 = this.cards.slice(26, 51)
  }
}

let thisDeck = new Deck()
thisDeck.createNewDeck()
thisDeck.shuffle()
thisDeck.dealHand()



module.exports = Deck