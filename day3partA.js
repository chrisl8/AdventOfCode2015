'use strict';
var fs = require('fs');

var input = fs.readFileSync('day3input.txt', 'utf8');

function CoordinateStore() {
    this.coordinateStore = {};
    this.uniqueCoordinates = 0;
}
CoordinateStore.prototype.store = function(coordinatesArray) {
    var coordinateToStore = coordinatesArray.join();
    if (this.coordinateStore.hasOwnProperty(coordinateToStore)) {
        this.coordinateStore[coordinateToStore]++;
    } else {
        this.coordinateStore[coordinateToStore] = 1;
        this.uniqueCoordinates++;
    }
};

var coordinatesVisited = new CoordinateStore;
var currentPosition = [0, 0];
coordinatesVisited.store(currentPosition);

for (var i = 0; i < input.length; i++) {
    let currentCharacter = input.substr(i,1);
    switch (currentCharacter) {
        case '^':
            currentPosition = [currentPosition[0], currentPosition[1] + 1];
            break;
        case 'v':
            currentPosition = [currentPosition[0], currentPosition[1] - 1];
            break;
        case '<':
            currentPosition = [currentPosition[0] - 1, currentPosition[1]];
            break;
        case '>':
            currentPosition = [currentPosition[0] + 1, currentPosition[1]];
            break;
    }
    coordinatesVisited.store(currentPosition);
}

console.log("Santa delivered gifts to " + coordinatesVisited.uniqueCoordinates + " houses.");
