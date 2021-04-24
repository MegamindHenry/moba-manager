// function Player(name, team){
//     this.name = name
//     this.team = team
//     this.position = 0
//     this.newPosition = 0
//     this.champ = 0
// }

function Player(playerJSON) {
    this.id = playerJSON["PlayerID"]
    this.name = playerJSON["Name"]
    this.team = playerJSON["Team"]
    this.position = 0
    this.newPosition = 0
    this.attackTarget = null
    this.castSpellTarget = null
    this.planMove = false
    this.planAttack = false
    this.planCastSpell = false
    this.champ = 0
}

Player.prototype.plan = function () {
    console.log(`    ${this.name}:`)

    var cardSet = {}
    cardSet[ActionCardEnum.move] = 1
    cardSet[ActionCardEnum.attack] = 1
    cardSet[ActionCardEnum.castSpell] = 1
    var actionCards = createCards(cardSet)
    var aCard = randChoice(actionCards)
    if (aCard == ActionCardEnum.move) {
        var cardSet = {}
        cardSet[MoveCardEnum.forward] = 2
        cardSet[MoveCardEnum.backward] = 2
        cardSet[MoveCardEnum.stay] = 1
        var moveCards = createCards(cardSet)
        var mCard = randChoice(moveCards)

        this.move(mCard)
    } else if (aCard == ActionCardEnum.attack) {
        var enemies = this.getEnemyTeamList()
        var cardSet = {}
        for (var i = 0; i < enemies.length; i ++) {
            cardSet[enemies[i]] = 1
        }
        var enemyCards = createCards(cardSet)
        var eCard = randChoice(enemyCards)

        this.attack(eCard)
    } else if (aCard == ActionCardEnum.castSpell) {
        var enemies = this.getEnemyTeamList()
        var cardSet = {}
        for (var i = 0; i < enemies.length; i ++) {
            cardSet[enemies[i]] = 1
        }
        var enemyCards = createCards(cardSet)
        var eCard = randChoice(enemyCards)

        this.castSpell(eCard)
    } else {
        console.error("Action not found!")
    }
}

Player.prototype.move = function(card) {
    if (card == MoveCardEnum.forward) {
        this.newPosition = this.position + 1
        console.log(`        plans to move forward.`)
    } else if (card == MoveCardEnum.backward) {
        this.newPosition = this.position - 1
        console.log(`        plans to move backward.`)
    } else if (card == MoveCardEnum.stay) {
        this.newPosition = this.position
        console.log(`        plans to stay.`)
    } else {
        console.error("Move action not found!")
    }
    this.planMove = true
}

Player.prototype.attack = function(card) {
    console.log(`        plans to attack ${players[card].name}.`)
    targetPlayer = players[card]
    this.attackTarget = targetPlayer
    this.planAttack = true
}

Player.prototype.castSpell = function(card) {
    console.log(`        plans to cast spell to ${players[card].name}.`)
    targetPlayer = players[card]
    this.castSpellTarget = targetPlayer
    this.planCastSpell = true
}

Player.prototype.act = function() {
    console.log(`    ${this.name}:`)

    if (this.planMove) {
        if (this.newPosition >= mapPoss.length || this.newPosition < 0) {
            console.log("Out of map! Stay.")
        }
        var oldPostion = this.position
        this.position = this.newPosition
        this.planMove = false
        console.log(`        Move from ${oldPostion} to ${this.position}.`)
    }

    if (this.planAttack) {
        var d = calDistance(this, this.attackTarget)
        if (d <= this.champ.attRange) {
            console.log(`        Attack ${this.attackTarget.name} success.`)
            this.attackTarget.champ.hp -= this.champ.attack
        } else {
            console.log(`        Out of range! Attack ${this.attackTarget.name} fail.`)
        }
        this.planAttack = false
    }

    if (this.planCastSpell) {
        var d = calDistance(this, this.castSpellTarget)
        if (d <= this.champ.attRange) {
            console.log(`        Cast spell to ${this.castSpellTarget.name} success.`)
            this.castSpellTarget.champ.hp -= this.champ.spell1.damage
        } else {
            console.log(`        Out of range! Cast spell to ${this.castSpellTarget.name} fail.`)
        }
        this.planCastSpell = false
    }
}

Player.prototype.getEnemyTeamList = function () {
    if (this.team == "Red") {
        return [1,2,3]
    } else {
        return [4,5,6]
    }
}

function initPlayers() {
    var players = {}
    var playersList = []
    for (var i = 0; i < playerJSON.length; i ++) {
        newPlayer = new Player(playerJSON[i])
        players[playerJSON[i]["PlayerID"]] = newPlayer
        playersList.push(playerJSON[i]["PlayerID"])
    }
    return [players, playersList]
}

function selectPlayerChamps(champPlayerPair) {
    for (var i = 0; i < champPlayerPair.length; i ++) {
        kv = champPlayerPair[i]
        newCChamp = new CurrentChamp(champs[kv[1]])
        players[kv[0]].champ = newCChamp
    }
}

function initPlayersPoss(initPoss) {
    if (playersList.length != initPoss.length) {
        console.log("Length of players are not the same with initPoss length")
        return
    }
    for (var i = 0; i < playersList.length; i ++) {
        players[playersList[i]].position = initPoss[i]
        players[playersList[i]].newPosition = initPoss[i]
    }
}

function calDistance(sourcePlayer, targetPlayer) {
    return Math.abs(sourcePlayer.position - targetPlayer.newPosition)
}