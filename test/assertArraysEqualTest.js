const assertArraysEqual = require('../assertArraysEqual')

console.log(assertArraysEqual([3, 2, 1], [3, 2, 1]));
console.log(assertArraysEqual([3, 2, 1], [3, 2, "hello"]));
