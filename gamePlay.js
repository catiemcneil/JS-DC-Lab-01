const Player = require('./player.js')
const Deck = require('./deck.js')
const Card = require('./card.js')

let username = 'player1'
let hand = thisDeck.hand1
let thisPlayer = new Player(username, hand)

let username2 = 'player2'
let hand2 = thisDeck.hand2
let thisPlayer2 = new Player(username2, hand2)

class War {
    constructor (players) {
        this.players = players
        this.card1 = []
        this.card2 = []
        this.allCards = []
    }
    playRound() {
        this.card1 = this.players[0].playTopCard()
        this.card2 = this.players[1].playTopCard()
        this.allCards = this.allCards + [this.card1, this.card2]
        console.log(this.allCards)
        if (this.card1.score > this.card2.score){
            this.players[0].addCardsToDeck(this.allCards)
            console.log(this.players[0].username + ' wins this round!')
            this.card1.length = []
            this.card2.length = []
        } else if (this.card1.score < this.card2.score) {
            this.players[1].addCardsToDeck(this.allCards)
            console.log(this.players[1].username + ' wins this round!')
            this.card1.length = []
            this.card2.length = []
        } else if (this.card1.score == this.card2.score) {
            console.log('WAR!')
        }
    }

    checkForWinner(){
        let win = false

        if (this.players[0].scoreCheck()) {
            console.log(this.players[0].username + ' wins!')
            win = true
        } else if (this.players[1].scoreCheck()) {
            console.log(this.players[1].username + ' wins!')
            win = true
        }
        return win
    }

    playGame() {
        while (!this.checkForWinner()) {
            this.playRound()
        }
    }
}


let game = new War([thisPlayer, thisPlayer2])
console.log(game)
game.playGame()

module.exports = War