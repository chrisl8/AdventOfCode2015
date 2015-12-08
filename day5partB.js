'use strict';
var fs = require('fs');

var filename = 'day5input.txt';

var input = fs.readFileSync(filename, 'utf8');
var lines = input.split('\n');

/*
 Now, a nice string is one with all of the following properties:

 It contains a pair of any two letters that appears at least twice in the string without overlapping, like xyxy (xy) or aabcdefgaa (aa), but not like aaa (aa, but it overlaps).
 It contains at least one letter which repeats with exactly one letter between them, like xyx, abcdefeghi (efe), or even aaa. */

function checkLine(line) {
    var re = /(..).*\1/g;
    if (line.match(re) === null) {
        return false;
    }
    re = /(.).\1/g;
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