// Assert Equal Function
const assertEqual = function (actual, expected) {
  let passEmoji = "🥳🥳🥳🥳🥳";
  let failEmoji = "😡😡😡😡😡";
  if (actual === expected) {
    console.log(`${passEmoji} Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`${failEmoji} Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const countLetters = function (sentence) {
  const result = {};
  for (let letter of sentence) {
    // add letter as key
    // Check for the letter in the result, if present then increment by 1. Else, 1
    if (letter === " "){
      continue;
    }
    if (result[letter]){
      result[letter] += 1;
    } else{
    result[letter] = 1;
    }
  } 
  return result;
}

console.log(countLetters('lighthouse in the house'));