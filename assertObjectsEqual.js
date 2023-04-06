const eqObjects = function (object1, object2) {
  let arrayOne = Object.keys(object1);
  let arrayTwo = Object.keys(object2);

  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (const key of arrayOne) {
    let value1 = arrayOne[key];
    let value2 = arrayTwo[key];
    if (Array.isArray(value1) && Array.isArray(value2) && !eqArrays(value1, value2)) {
      return false;
    }

    if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) !== true) {
    return (`😡😡😡😡😡 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }
    return (`🥳🥳🥳🥳🥳 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
};

const multiColorShirtObject = {
  colors: ["red", "blue"],
  size: "medium"
};

const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"]
};


const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long"
};




console.log(assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject), true);

console.log(assertObjectsEqual(longSleeveMultiColorShirtObject, multiColorShirtObject), false);