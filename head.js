const assertEqual = require('./assertEqual');
// Head Function
const head = function(array) {
  if (array.length === 0) {
    return undefined;
  } else {
    return array[0];
  }
}; 