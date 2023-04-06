// Map function will take in two arguments
// An array to map
// a callback function.
//Map function to return a new array based on the results of the callback.
const assertArraysEqual = function (arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo) !== true) {
    return (`😡😡😡😡😡 Assertion Failed: ${arrayOne} !== ${arrayTwo}`)
  }
  return (`🥳🥳🥳🥳🥳 Assertion Passed: ${arrayOne} === ${arrayTwo}`)
};

const eqArrays = function (arrayOne, arrayTwo) {
  //check if arrays are same length
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;

}



const newArray = [1, 2, 3, 4, 5]
const words = ["in", "time", "I", "want", "to", "be", "your", "bestfriend"];
const against = ["This", "is", "my", "test", "array"]
const results1 = map(words, word => word[0]);


const results2 = map(newArray, num => num + 1);



console.log(assertArraysEqual(words, results1));
console.log(assertArraysEqual(newArray, results2));
console.log(assertArraysEqual(newArray, results1));