// const MoveCards = Object.freeze({"forward":1, "backward":2, "stay":3})

function createCards(cardSet) {
    var cards = []

    // create card list based on cardSet
    // a cardSet with {1:2, 2:2, 3:3}
    // will result in a card list of two 1s, two 2s and one 3.
    // [1,1,2,2,3]
    Object.entries(cardSet).forEach(([key, value]) => {
        for (var i = 0; i < value; i ++) {
            cards.push(key)
        }
    })

    return cards
}

function randChoice(cards) {
    return cards[Math.floor(Math.random() * cards.length)]
}