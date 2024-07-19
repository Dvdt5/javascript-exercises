const add = function(number1, number2) {
	return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const multiply = function(array) {
  let multiply = 1;
  for (let i = 0; i < array.length; i++) {
    multiply *= array[i];
  }
  return multiply;
};

const power = function(number, power) {
  let multiply = 1;
  for (let i = 0; i < power; i++) {
    multiply *= number;
  }
  return multiply;
};

const factorial = function(number) {
  let multiply = 1;
  for (let i = number; i > 0; i--){
    multiply *= i;
  }
  return multiply;
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
