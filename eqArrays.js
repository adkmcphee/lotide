
const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`😡😡😡😡😡 Assertion Failed: ${actual} !==  ${expected}`);
    return;
  } 
  //Happy Path
    console.log(`🥳🥳🥳🥳🥳 Assertion Passed: ${actual} ===  ${expected}`);
};

// Create a function which takes in two arrays and returns true or false, based on a perfect match. Use assertEqual to test case for various scenarios. 
 

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
  // Happpy Path
  return true;
};

module.exports = eqArrays;
