const Deck = require('./deck.js')
const Card = require('./card.js')

let thisDeck = new Deck()

class Player {

    constructor(username, hand) {

        this.username = username
        this.hand = hand
    }
    playTopCard() {

        let playCard = this.hand.pop()
        console.log(this.username + ' plays ' + playCard.title )
        return playCard
    }
    handSize() {
        return this.hand.length
    }
    addCardsToDeck(cardsPlayed) {
        // javascript adding arrays, merging arrays
        // this.hand.cardsPlayed.push()
        this.addCards = this.addCards + [this.hand, cardsPlayed]
        this.addCards.push()
    }
    handSize() {
        return this.hand.length
    }
    scoreCheck() {
        let hasWon = false

        if (this.hand.length == 52){
             hasWon =  true
        }
        console.log('Has ' + username + ' won? ' + hasWon)
        return hasWon
    }
}

let username = 'player1'
let hand = thisDeck.hand1
let thisPlayer = new Player(username, hand)

let username2 = 'player2'
let hand2 = thisDeck.hand2
let thisPlayer2 = new Player(username2, hand2)

module.exports.player = Player
