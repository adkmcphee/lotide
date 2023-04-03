


// Assert Equal Function
const assertEqual = function(actual, expected) {
  let passEmoji = "🥳🥳🥳🥳🥳";
  let failEmoji = "😡😡😡😡😡";
  if (actual === expected) {
    console.log(`${passEmoji} Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`${failEmoji} Assertion Failed: ${actual} !==  ${expected}`);
  }
};

// Head Function
const head = function (array){
  if (array.length === 0){
    return undefined;
  } else {
    return array[0];
  }
} 

// Test Assertions
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([3,2,1]), 6);
assertEqual(head([]), 10);