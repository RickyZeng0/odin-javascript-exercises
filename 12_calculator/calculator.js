const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  return array.reduce( ( (sum,element) => sum += element),0);
};

const multiply = function(array) {
  return array.reduce( ( (multiplies,element) => multiplies *= element),1);
};

const power = function(number,index) {
	return number ** index;
};

const factorial = function f(n) {
	if(n==1 || n == 0) return 1;
  else return n * f(n-1);
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
