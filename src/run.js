var roundN = 0;
var players;
var mapPoss;

function runGame() {
    var roundInfoP = document.getElementById("round-info-p");
    roundInfoP.innerHTML = "Game Strat!";
    console.log("Game Strat!")

    mapPoss = initMap();
    players = initPlayers();
    initPlayersPoss(players, [2,3,4,7,8,9]);
    mapDisplay();
}

function roundContinue() {
    roundN += 1;

    let roundInfo = `Round ${roundN}`;
    console.log(roundInfo);

    var roundInfoP = document.getElementById("round-info-p");
    roundInfoP.innerHTML = roundInfo;

    planPharse();
    actionPharse();

    mapDisplay();
}

function mapDisplay() {
    var table = document.createElement("table");
    table.classList.add("table");
    table.classList.add("table-striped");
    table.classList.add("table-bordered");

    var trHead = table.insertRow(-1);
    var tr = table.insertRow(-1);

    var mapChampPos = calMapPos(players, mapPoss);

    for (var i = 0; i < mapPoss.length; i ++) {
        var th = document.createElement("th");
        th.innerHTML = mapPoss[i].name;
        trHead.appendChild(th);
        var th = document.createElement("th");

        for (var j = 0; j < mapChampPos[i].length; j ++) {
            var label = document.createElement("label");
            player = mapChampPos[i][j]
            label.innerHTML = player.name;
            label.classList.add("btn");
            if (player.team == "Blue") {
                label.classList.add("btn-primary");
            } else if (player.team == "Red") {
                label.classList.add("btn-danger");
            }
            label.classList.add("btn-player");
            th.appendChild(label);
        }

        tr.appendChild(th);
    }

    var mapDisplayDiv = document.getElementById("map-display-div");
    mapDisplayDiv.innerHTML = "";
    mapDisplayDiv.appendChild(table);
}

function planPharse() {
    for (var i = 0; i < players.length; i ++) {
        players[i].plan();
    }
}

function actionPharse() {
    for (var i = 0; i < players.length; i ++) {
        if (players[i].newPosition >= mapPoss.length) {
            players[i].newPosition = mapPoss.length - 1;
        }

        if (players[i].newPosition < 0) {
            players[i].newPosition = 0;
        }
        players[i].position = players[i].newPosition;
    }
}