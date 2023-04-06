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

const assertArraysEqual = function (arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo) !== true) {
    return (`😡😡😡😡😡 Assertion Failed: ${arrayOne} !== ${arrayTwo}`)
  }
  return (`🥳🥳🥳🥳🥳 Assertion Passed: ${arrayOne} === ${arrayTwo}`)
};




const takeUntil = function (array, callback) {
  let newArray = []
  for (const element of array) {
    if (callback(element)) {
      break;
    }
    newArray.push(element)
  } 
  return newArray;
}
//function should return a slice of the array with elements taken from the beginning
//once the callback function returns true, the loop should stop.




const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);