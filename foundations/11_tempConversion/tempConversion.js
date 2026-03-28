const convertToCelsius = function(f) {
let cel= (f-32)*(5/9);
let celR= Math.round(cel*10)/10;
return celR
};

const convertToFahrenheit = function(c) {
let fah = (c*1.8)+32;
let fahR= Math.round(fah*10)/10;
return fahR
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
