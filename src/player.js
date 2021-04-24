function Player(name, team){
    this.name = name
    this.team = team
    this.position = 0
    this.newPosition = 0
    this.champ = 0
}

Player.prototype.plan = function () {
    var cards = createCards({1:2,2:2,3:1})
    var selectCard = randChoice(cards)

    this.move(selectCard)
}

Player.prototype.move = function(card) {
    if (card == 1) {
        this.newPosition = this.position + 1
        console.log(`${this.name} moves forward.`)
    } else if (card == 2) {
        this.newPosition = this.position - 1
        console.log(`${this.name} moves forward.`)
    } else if (card == 3) {
        this.newPosition = this.position
        console.log(`${this.name} moves forward.`)
    } else {
        console.error("Moves not found!")
    }

    return 1
}

function initPlayers() {
    var players = []
    for (var i = 0; i < playerJSON.length; i ++) {
        players.push(new Player(playerJSON[i]["Name"], playerJSON[i]["Team"]))
    }
    return players
}

function initPlayersPoss(players, initPoss) {
    if (players.length != initPoss.length) {
        console.log("Length of players are not the same with initPoss length")
        return
    }
    for (var i = 0; i < players.length; i ++) {
        players[i].position = initPoss[i]
    }
}