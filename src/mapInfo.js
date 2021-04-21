function MapPosition(id, name){
    this.id = id;
    this.name = name;
};

function initMap() {
    var rb1 = new MapPosition("rb1", 'Red Back 1');
    var rb2 = new MapPosition("rb2", 'Red Back 2');
    var rb3 = new MapPosition("rb3", 'Red Back 3');

    var r1 = new MapPosition("r1", 'Red 1');
    var r2 = new MapPosition("r2", 'Red 2');
    var r3 = new MapPosition("r3", 'Red 3');
    var r4 = new MapPosition("r4", 'Red 4');
    var r5 = new MapPosition("r5", 'Red 5');

    var b1 = new MapPosition("b1", 'Blue 1');
    var b2 = new MapPosition("b1", 'Blue 2');
    var b3 = new MapPosition("b1", 'Blue 3');
    var b4 = new MapPosition("b1", 'Blue 4');
    var b5 = new MapPosition("b1", 'Blue 5');

    var bb1 = new MapPosition("bb1", 'Blue Back 1');
    var bb2 = new MapPosition("bb2", 'Blue Back 2');
    var bb3 = new MapPosition("bb3", 'Blue Back 3');

    var mapPoss = [rb1, rb2, rb3, r1, r2, r3, r4, r5, b5, b4, b3, b2, b1, bb3,
        bb2, bb1];

    return mapPoss;
};

function calMapPos(players, mapPoss) {
    var mapChampPos = [];

    for (var i = 0; i < mapPoss.length; i ++) {
        mapChampPos.push([]);
    }

    for (var i = 0; i < players.length; i ++) {
        pos = players[i].position;
        mapChampPos[pos].push(players[i]);
    }

    return mapChampPos;
}