'use strict';
var fs = require('fs');

var filename = 'day2input.txt';

var input = fs.readFileSync(filename, 'utf8');

var boxSideLengthList = input.split('\n');

function doubleTheSides(sideArea) {
    return sideArea * 2;
}

function getRequiredRibbonForOneBox(sideList) {
    let thisBoxSides = sideList.split('x');
    thisBoxSides.sort(function(a, b) {
        return a - b;
    });
    let ribbonRequiredForTheBox = (thisBoxSides[0] * 2) + (thisBoxSides[1] * 2);
    let ribbonRequiredForTheBow = thisBoxSides.reduce(function(previousValue, currentValue, currentIndex, array) {
        return previousValue * currentValue;
    });
    return ribbonRequiredForTheBox + ribbonRequiredForTheBow;
}

var ribbonRequiredPerBox = boxSideLengthList.map(getRequiredRibbonForOneBox);

var totalRibbonToOrder = ribbonRequiredPerBox.reduce(function(previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
});

console.log('Total required ribbon = ' + totalRibbonToOrder);
