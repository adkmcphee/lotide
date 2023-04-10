const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual');

const value = middle([1, 2, 3])

console.log(assertArraysEqual(value, [2])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1, 2])); // => []
