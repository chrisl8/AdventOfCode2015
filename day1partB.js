'use strict';
var fs = require('fs');

var filename = 'day1input.txt';

var input = fs.readFileSync(filename, 'utf8');

var currentFloor = 0;
// The puzzle is 1 based while our language is 0 based
var currentPosition;
for (var i = 0; i < input.length; i++) {
    currentPosition = i + 1;
    let currentCharacter = input.substr(i, 1);
    if (currentCharacter === '(') {
        currentFloor++;
    } else {
        currentFloor--;
    }
    //console.log(currentPosition + ': ' + currentCharacter + ', now on floor: ' + currentFloor);
    if (currentFloor === -1) {
        break
    }
}
console.log('Santa entered floor ' + currentFloor + ', the basement, at position ' + currentPosition);
