let passEmoji = "🥳🥳🥳🥳🥳";
let failEmoji = "😡😡😡😡😡";


// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(passEmoji + " Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log(failEmoji + " Assertion Failed: " + actual + " !== " + expected);
  }

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(3, 14);
assertEqual("Same string", "Same string");