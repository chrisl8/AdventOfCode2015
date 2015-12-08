'use strict';
var fs = require('fs');

var filename = 'day5input.txt';

var input = fs.readFileSync(filename, 'utf8');
var lines = input.split('\n');

/*
 A nice string is one with all of the following properties:

 It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
 It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
 It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.
 */

function checkLine(line) {
    var re = /(ab)|(cd)|(pq)|(xy)/g;
    if (line.match(re) !== null) {
        return false;
    }
    re = /([aeiou].*[aeiou].*[aeiou])/g;
    if (line.match(re) === null) {
        return false;
    }
    re = /(.)\1/g;
    if (line.match(re) === null) {
        return false;
    }
    return true;
}

var niceLines = 0;
for (var i = 0; i < lines.length; i++) {
    if (checkLine(lines[i])) {
        niceLines++;
    }
}

console.log(niceLines);