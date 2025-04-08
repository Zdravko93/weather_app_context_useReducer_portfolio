export const kelvinToCelsius = (kelvin) => kelvin - 273.15;
export const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
export const convertTemperature = (temp, isCelsius) => {
  if (isCelsius) {
    return Math.round(kelvinToCelsius(temp));
  } else {
    return Math.round(celsiusToFahrenheit(kelvinToCelsius(temp)));
  }
};
