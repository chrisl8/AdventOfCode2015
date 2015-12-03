'use strict';
var fs = require('fs');

var filename = 'day2input.txt';

var input = fs.readFileSync(filename, 'utf8');

var boxSideLengthList = input.split('\n');

function doubleTheSides(sideArea) {
    return sideArea * 2;
}

function returnAreas(sideList) {
    let thisBoxSides = sideList.split('x');
    let thisBoxAreas = [];
    thisBoxAreas[0] = thisBoxSides[0] * thisBoxSides[1];
    thisBoxAreas[1] = thisBoxSides[0] * thisBoxSides[2];
    thisBoxAreas[2] = thisBoxSides[1] * thisBoxSides[2];
    thisBoxAreas.sort(function(a, b) {
        return a - b;
    });
    let smallestSide = thisBoxAreas[0];
    let thisBoxDoubledAreas = thisBoxAreas.map(doubleTheSides);
    thisBoxDoubledAreas.push(smallestSide);
    let totalPaperForThisBox = thisBoxDoubledAreas.reduce(function(previousValue, currentValue, currentIndex, array) {
        return previousValue + currentValue;
    });
    return totalPaperForThisBox;
}

var paperRequiredPerBox = boxSideLengthList.map(returnAreas);

var totalPaperToOrder = paperRequiredPerBox.reduce(function(previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
});

console.log('Total required = ' +totalPaperToOrder);
