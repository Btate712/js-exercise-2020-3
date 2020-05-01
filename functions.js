// multiMultiply accepts any number of numbers as parameters and returns the result
// of multiplying all of those parameters with each other. If no parameters are 
// passed, it should return the number 1.
function multiMultiply(...args) {
  if(args.length > 0) {
    return args.reduce((accumulator, nextValue) => accumulator * nextValue, 1);
  } else {
    return 1;
  }
}

exports.multiMultiply = multiMultiply;