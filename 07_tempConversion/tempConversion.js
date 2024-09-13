const convertToCelsius = function(inputTemp) {
  //convert input in fahrenheit to celsius
  if(typeof inputTemp === "number"){
    let celsiusTemp = (inputTemp - 32) * (5/9);
    //if not an integer, round to 1 decimal 
    if(!Number.isInteger(celsiusTemp)){
      celsiusTemp = celsiusTemp.toFixed(1)*1;
    }
    return celsiusTemp;
  } else {alert("You must input a number!")}
};

const convertToFahrenheit = function(inputTemp) {
  if(typeof inputTemp === "number"){
    let fahrenheitTemp = inputTemp * (9/5) + 32;
    //if not an integer, round to 1 decimal 
    if(!Number.isInteger(fahrenheitTemp)){
      fahrenheitTemp = fahrenheitTemp.toFixed(1)*1;
    }
    return fahrenheitTemp;
  } else {alert("You must input a number!")}
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
