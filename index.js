const userPrompts = require('./prompt.js')
const card = require('./card.js')
const deck = require('./deck.js')
const player = require('./player.js')
const gamePlay = require('./gamePlay.js')

userPromts.usernamePrompt()
card.card()
deck.card()
deck.deck()
deck.createNewDeck()
deck.shuffle()
deck.dealHand()
player.player()
gamePlay.war()
console.log(game)
game.playGame()