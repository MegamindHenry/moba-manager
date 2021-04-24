function MapPosition(id, name, position){
    this.id = id
    this.name = name
    this.position = position
}

function initMap() {
    var rb1 = new MapPosition("rb1", 'Red Back 1', 1)
    var rb2 = new MapPosition("rb2", 'Red Back 2', 2)
    var rb3 = new MapPosition("rb3", 'Red Back 3', 3)

    var r1 = new MapPosition("r1", 'Red 1', 4)
    var r2 = new MapPosition("r2", 'Red 2', 5)
    var r3 = new MapPosition("r3", 'Red 3', 6)
    var r4 = new MapPosition("r4", 'Red 4', 7)
    var r5 = new MapPosition("r5", 'Red 5', 8)

    var b1 = new MapPosition("b1", 'Blue 1', 13)
    var b2 = new MapPosition("b1", 'Blue 2', 12)
    var b3 = new MapPosition("b1", 'Blue 3', 11)
    var b4 = new MapPosition("b1", 'Blue 4', 10)
    var b5 = new MapPosition("b1", 'Blue 5', 9)

    var bb1 = new MapPosition("bb1", 'Blue Back 1', 16)
    var bb2 = new MapPosition("bb2", 'Blue Back 2', 15)
    var bb3 = new MapPosition("bb3", 'Blue Back 3', 14)

    var mapPoss = [rb1, rb2, rb3, r1, r2, r3, r4, r5, b5, b4, b3, b2, b1, bb3,
        bb2, bb1]

    return mapPoss
}

function calMapPos() {
    var mapChampPos = []

    for (var i = 0; i < mapPoss.length; i ++) {
        mapChampPos.push([])
    }

    for (var i = 0; i < playersList.length; i ++) {
        player = players[playersList[i]]
        mapChampPos[player.position].push(player)
    }

    return mapChampPos
}

function mapDisplay() {
    var table = document.createElement("table")
    table.classList.add("table")
    table.classList.add("table-striped")
    table.classList.add("table-bordered")

    var trHead = table.insertRow(-1)
    var tr = table.insertRow(-1)

    var mapChampPos = calMapPos()

    for (var i = 0; i < mapPoss.length; i ++) {
        var th = document.createElement("th")
        th.innerHTML = mapPoss[i].name
        trHead.appendChild(th)
        var th = document.createElement("th")

        for (var j = 0; j < mapChampPos[i].length; j ++) {
            var label = document.createElement("label")
            player = mapChampPos[i][j]
            label.innerHTML = `${player.name} ${player.champ.name} HP: ${player.champ.hp}`
            label.classList.add("btn")
            if (player.team == "Blue") {
                label.classList.add("btn-primary")
            } else if (player.team == "Red") {
                label.classList.add("btn-danger")
            }
            label.classList.add("btn-player")
            th.appendChild(label)
        }

        tr.appendChild(th)
    }

    var mapDisplayDiv = document.getElementById("map-display-div")
    mapDisplayDiv.innerHTML = ""
    mapDisplayDiv.appendChild(table)
}