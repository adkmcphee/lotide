const middle = function(array) {
  if (!array.length || array.length <= 2) {
    return [];
  }
  const mid = array.length / 2;
  if (array.length % 2 == 1) { //Function will need to pull the one middle element if odd
    return [array[Math.floor(mid)]];
  } else {   //Function will need to pull the two middle elements if even.
    return [array[mid - 1], array[mid]];
  }
};

module.exports = middle;