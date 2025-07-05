const convertToCelsius = function(x) {
  let celsius = (x-32)* 5/9;
  let roundedCelsius = Math.round(celsius*10)/10;
  return roundedCelsius;
};

const convertToFahrenheit = function(x) {
  let fahrenheit = x * 9/5 + 32;
  let roundedCelsius = Math.round(fahrenheit*10)/10;
  return roundedCelsius;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
