const assertEqual = function (actual, expected) {
  let passEmoji = "🥳🥳🥳🥳🥳";
  let failEmoji = "😡😡😡😡😡";
  if (actual === expected) {
    console.log(`${passEmoji} Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`${failEmoji} Assertion Failed: ${actual} !==  ${expected}`);
  }

};


const eqArrays = function (arrayOne, arrayTwo) {
  //check if arrays are same length
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};


const eqObjects = function (object1, object2) {
  let arrayOne = Object.keys(object1);
  let arrayTwo = Object.keys(object2);

  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (const key of arrayOne) {
    let value1 = arrayOne[key];
    let value2 = arrayTwo[key];
    if (Array.isArray(value1) && Array.isArray(value2) && !eqArrays(value1, value2)){
      return false;
    }

    if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

const shirtObject = {
  color: "red",
  size: "medium"
};

const anotherShirtObject = {
  size: "medium",
  color: "red",
};

assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long"
};

assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false




const multiColorShirtObject = {
  colors: ["red", "blue"],
  size: "medium"
};

const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"]
};

assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long"
};

assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false


///////////////////////


