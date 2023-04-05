// FUNCTION IMPLEMENTATION
let passEmoji = "🥳🥳🥳🥳🥳";
let failEmoji = "😡😡😡😡😡";
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${passEmoji} Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`${failEmoji} Assertion Failed: ${actual} !==  ${expected}`);
  }

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
  return true;
  };


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS

