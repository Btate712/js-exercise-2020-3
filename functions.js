// multiMultiply accepts any number of numbers as parameters and returns the result
// of multiplying all of those parameters with each other. If no parameters are 
// passed, it should return the number 1.
function multiMultiply(...args) {
  if(args.some(value => typeof(value) !== "number")) {
 
  }

  if(args.length > 0) {
    return args.reduce((accumulator, nextValue) => accumulator * nextValue, 1);
  } else {
    return 1;
  }
}

// findAny accepts an array and one or more additional parameters and returns true 
// if any of the additional parameters are found in the array or false if none of the 
// parameters are found in the array. It should return true if no parameters are passed.
function findAny(array, ...args) {
  if(args.length < 1) {
    return true;
  } else {
    return array.some(value => args.some(arg => arg === value));
  }
}

// findAll accepts an array and one or more additional parameters and returns true 
// if all of the additional parameters are found in the array or false if any of the 
// parameters are not found in the array. It should return true if no parameters are passed.
function findAll(array, ...args) {
  if(args.length < 1) {
    return true;
  } else {
    return args.every(arg => array.some(value => value === arg));
  }
}

// numsToWords accepts any number of integer parameters between 0 and 9 and returns
// an array of each of those integers converted into a string which is the word representation
// of the number (e.g. 1 becomes "one"). If no arguments are passed, an empty array should be 
// returned.
function numsToWords(...args) {
  const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

  return args.map(number => words[number]);
}

exports.multiMultiply = multiMultiply;
exports.findAny = findAny;
exports.findAll = findAll;
exports.numsToWords = numsToWords;