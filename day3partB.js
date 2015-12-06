'use strict';
var fs = require('fs');

var input = fs.readFileSync('day3input.txt', 'utf8');

function CoordinateStore() {
    this.coordinateStore = {};
    this.uniqueCoordinates = 0;
}
CoordinateStore.prototype.store = function (coordinatesArray) {
    var coordinateToStore = coordinatesArray.join();
    if (this.coordinateStore.hasOwnProperty(coordinateToStore)) {
        this.coordinateStore[coordinateToStore]++;
    } else {
        this.coordinateStore[coordinateToStore] = 1;
        this.uniqueCoordinates++;
    }
};

var coordinatesVisited = new CoordinateStore;
var currentPositionSanta = [0, 0];
var currentPositionRobot = [0, 0];
coordinatesVisited.store(currentPositionSanta);
coordinatesVisited.store(currentPositionRobot);

function determineNewPosition(oldPosition, character) {
    var newPosition = [];
    switch (character) {
        case '^':
            newPosition = [oldPosition[0], oldPosition[1] + 1];
            break;
        case 'v':
            newPosition = [oldPosition[0], oldPosition[1] - 1];
            break;
        case '<':
            newPosition = [oldPosition[0] - 1, oldPosition[1]];
            break;
        case '>':
            newPosition = [oldPosition[0] + 1, oldPosition[1]];
            break;
    }
    return newPosition;
}

for (var i = 0; i < input.length; i++) {
    let currentCharacter = input.substr(i, 1);
    currentPositionSanta = determineNewPosition(currentPositionSanta, currentCharacter);
    coordinatesVisited.store(currentPositionSanta);
    if (i < input.length - 1) {
        i++;
        currentCharacter = input.substr(i, 1);
        currentPositionRobot = determineNewPosition(currentPositionRobot, currentCharacter);
        coordinatesVisited.store(currentPositionRobot);
    }
}

console.log("Santa and his robot delivered gifts to " + coordinatesVisited.uniqueCoordinates + " houses.");
