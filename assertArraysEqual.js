const eqArrays = require('./eqArrays')

  const assertArraysEqual = function(arrayOne, arrayTwo) {
    if (eqArrays(arrayOne, arrayTwo) !== true){
      return (`😡😡😡😡😡 Assertion Failed: ${arrayOne} !== ${arrayTwo}`)
    }
      return (`🥳🥳🥳🥳🥳 Assertion Passed: ${arrayOne} === ${arrayTwo}`)
  };

module.exports = assertArraysEqual;