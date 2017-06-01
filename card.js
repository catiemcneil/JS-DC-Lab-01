const rank = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king']
const suit = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
const score = {ace: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, jack: 11, queen: 12, king: 13}


class Card {
    constructor ( rank, suit) {
        this.score = score[rank]
        this.title = `${rank} of ${suit}`
    }
}


module.exports = Card