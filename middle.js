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

  //Create function that will take in an array and return the middle-most element(s) of the given array

  const middle = function(array){
    if (!array.length || array.length <= 2){
      return [];
    }
    const mid = array.length / 2;
    if (array.length % 2 == 1){ //Function will need to pull the one middle element if odd
      return [array[Math.floor(mid)]];
    } else {   //Function will need to pull the two middle elements if even.
      return [array[mid - 1], array[mid]];
    }
  }

  //Function will need to pull the one middle element if odd

  //Function will need to pull the two middle elements if even.

  //Function with one or two elements should return an empty array.

  //Return new array
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
console.log(middle([1, 2])) // => []