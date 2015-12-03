var fs = require('fs');

var filename = 'day1input.txt';

var input = fs.readFileSync(filename, 'utf8');

var totalFlights = input.length;
var re = /\(/g;
var upFloors = input.match(re).length;
var downFloors = totalFlights - upFloors;
console.log('Santa is now on floor', upFloors - downFloors);
