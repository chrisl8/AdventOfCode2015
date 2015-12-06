var md5 = require('md5');

var input = 'bgvyzdsv';

var key = 0;

while (md5(input + key).substr(0,6) !== '000000') {
    key++
}

console.log("The key is: " + key);
