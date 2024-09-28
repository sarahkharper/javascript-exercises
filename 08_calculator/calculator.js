const add = function(a, b) {
	if (typeof a == "number" && typeof b == "number"){
    return a + b;
  }
};

const subtract = function(a,b) {
  if (typeof a == "number" && typeof b == "number"){
    return a - b;
  }
};

const sum = function(arr) {
  if (arr.every(item => typeof item === 'number')){
    return arr.reduce((total, item) => total + item, 0);
  } else {
    return 0;
  }
};

const multiply = function(arr) {
  if (arr.every(item => typeof item === 'number')){
    return arr.reduce((total, item) => total * item, 1);
  } else {
    return undefined;
  };
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if(n === 0) return 1;
  let result = 1;
  for(n = 2; n <= a; n++){
    result *= n;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
