var roundN = 0
var players
var playersList
var champs
var spells
var mapPoss

function runGame() {
    var roundInfoP = document.getElementById("round-info-p")
    roundInfoP.innerHTML = "Game Strat!"
    console.log("Game Strat!")

    mapPoss = initMap()
    ppn = initPlayers()
    players = ppn[0]
    playersList = ppn[1]
    spells = initSpells()
    champs = initChamps()
    selectPlayerChamps([[1,3], [2,2], [3,1], [4,1], [5,2], [6,3]])
    initPlayersPoss([3,4,5,6,7,8])
    mapDisplay()

    document.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
            roundContinue()
        }
    })
}

function roundContinue() {
    roundN += 1

    let roundInfo = `Round ${roundN}`
    console.log(roundInfo)

    var roundInfoP = document.getElementById("round-info-p")
    roundInfoP.innerHTML = roundInfo

    planPharse()
    actPharse()

    mapDisplay()
}

function planPharse() {
    console.log("Plan Pharse")
    for (var i = 0; i < playersList.length; i ++) {
        player = players[playersList[i]]
        player.plan()
    }
}

function actPharse() {
    console.log("Action Pharse")

    for (var i = 0; i < playersList.length; i ++) {
        player = players[playersList[i]]
        player.act()
    }
}