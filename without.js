// function to test if two arrays are the same
const eqArrays = function(arrayOne, arrayTwo) {
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

// Function to return appropriate message based on eqArrays function
const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo) !== true){
    return (`😡😡😡😡😡 Assertion Failed: ${arrayOne} !== ${arrayTwo}`)
  }
    return (`🥳🥳🥳🥳🥳 Assertion Passed: ${arrayOne} === ${arrayTwo}`)
};

// Create a function "without" that will take in a source array and a itemsToRemove array.
// the function should return a new array with only those elements from source that are not present in the itemsToRemove array.

const without = function(source, itemsToRemove){
  let newArray = [];
  for (let i  = 0; i < source.length; i++){
  if (source[i] !== itemsToRemove[i]){
    newArray.push(source[i]);
  } 
}return newArray;
}





// test cases
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3",])); // => ["1", "2"]
console.log(without(["Hey", "There", "Stranger"], ["Hey", "There"]));
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));