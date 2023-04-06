const assertEqual = function (actual, expected) {
  let passEmoji = "🥳🥳🥳🥳🥳";
  let failEmoji = "😡😡😡😡😡";
  if (actual === expected) {
    console.log(`${passEmoji} Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`${failEmoji} Assertion Failed: ${actual} !==  ${expected}`);
  }

};


const findKeyByValue = function (object, value) {
  // create array of our object's property names
  let keys = Object.keys(object);

  //loop through the array

  for (let genre of keys) {
    // access object property with square notation and compare it to our value to run the test.
    if (object[genre] === value) {
      // if it is true, return the genre to our function. 
      return genre;
    }
  } 
};





const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "comedy");