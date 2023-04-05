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

const tail = function(array) {
  return array.slice(1);
};






// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"


