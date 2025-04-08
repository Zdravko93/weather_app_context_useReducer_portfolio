import React from "react";

import classes from "./WeatherCardCurentTemperature.module.css";
import {
  kelvinToCelsius,
  celsiusToFahrenheit,
} from "../../../utils/utilsTemperatureData";
import { useWeatherContext } from "../../../context/WeatherContext";

function WeatherCardCurrentTemperature() {
  // context
  const { state } = useWeatherContext();
  const { weatherData, isCelsius } = state;
  // extract temperature value from weatherData object
  const { temp } = weatherData.main; // extracted 'temp' value is in Kelvin

  const tempCelsius = kelvinToCelsius(temp); // convert to celsius
  const tempFahrenheit = celsiusToFahrenheit(tempCelsius); // convert to fahrenheit

  const temperature = isCelsius
    ? tempCelsius.toFixed(1)
    : tempFahrenheit.toFixed(1);
  const unit = isCelsius ? "°C" : "°F";

  return (
    <span
      aria-label="current-temperature"
      className={classes["current-temperature"]}
    >
      {temperature}
      {unit}
    </span>
  );
}

export default WeatherCardCurrentTemperature;
