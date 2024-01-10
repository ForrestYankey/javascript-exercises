const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((sum, num) => sum + num, 0);
};

const multiply = function(array) {
  return array.reduce((multiply, num) => multiply * num);
};

const power = function(num, power) {
  let result = num;
	for (let i = 1; i < power; i++) {
    result *= num;
  }
  return result;
};

const factorial = function(num) {
	let total = 1;
  let number = num;
  for (let i = 1; i < num; i++) {
    total *= number;
    number--;
  }
  return total;
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
