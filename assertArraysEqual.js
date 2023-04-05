const eqArrays = function(arrayOne, arrayTwo) {
  //check if arrays are same length
  if (arrayOne.length !== arrayTwo.length){
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++){
    if (arrayOne[i] !== arrayTwo[i]){
      return false;
    }
  } 
  return true;
  };

  //  Create a function that will take in two arrays and console.log an appropriate message to the console.
  // 

  const assertArraysEqual = function(arrayOne, arrayTwo) {
    if (eqArrays(arrayOne, arrayTwo) !== true){
      return (`😡😡😡😡😡 Assertion Failed: ${arrayOne} !== ${arrayTwo}`)
    }
      return (`🥳🥳🥳🥳🥳 Assertion Passed: ${arrayOne} === ${arrayTwo}`)
  };

console.log(assertArraysEqual([3, 2, 1], [3, 2, 1]));
console.log(assertArraysEqual([3, 2, 1], [3, 2, "hello"]));
