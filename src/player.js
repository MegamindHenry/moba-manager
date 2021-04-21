function Player(name, team){
    this.name = name;
    this.team = team;
    this.position = 0;
    this.newPosition = 0;
}

Player.prototype.plan = function () {
    array = [0,1,2]
    return randomElement = array[Math.floor(Math.random() * array.length)];
};

function initPlayers() {
    var players = [];
    for (var i = 0; i < playerJSON.length; i ++) {
        players.push(new Player(playerJSON[i]["Name"], playerJSON[i]["Team"]));
    }
    return players;
}

function initPlayersPoss(players, initPoss) {
    if (players.length != initPoss.length) {
        console.log("Length of players are not the same with initPoss length");
        return;
    }
    for (var i = 0; i < players.length; i ++) {
        players[i].position = initPoss[i];
    }
}