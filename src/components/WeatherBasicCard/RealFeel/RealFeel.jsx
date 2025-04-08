import React from "react";

import classes from "./RealFeel.module.css";

import Card from "../../UI/Card";
import {
  kelvinToCelsius,
  celsiusToFahrenheit,
} from "../../../utils/utilsTemperatureData";
import { useWeatherContext } from "../../../context/WeatherContext";

function RealFeel() {
  // context
  const { state } = useWeatherContext();
  const { weatherData, isCelsius } = state;
  const { feels_like } = weatherData.main; // extracted 'feels_like' temperature in Kelvin

  // convert feels_like temperatures from Kelvin to Celsius and Fahrenheit
  const tempFeelsLikeCelsius = kelvinToCelsius(feels_like); // 'feels like' to celsius
  const tempFeelsLikeFahrenheit = celsiusToFahrenheit(tempFeelsLikeCelsius); // 'feels_like' to fahrenheit

  const realFeelTemp = isCelsius
    ? tempFeelsLikeCelsius.toFixed(1)
    : tempFeelsLikeFahrenheit.toFixed(1);
  const unit = isCelsius ? "°C" : "°F";

  return (
    <Card WRAPPER="div" className={classes["real-feel"]}>
      <h4 id="real-feel-title">Real Feel</h4>
      <Card WRAPPER="span" ariaDescribedBy="real-feel-title">
        {realFeelTemp}
        {unit}
      </Card>
    </Card>
  );
}

export default RealFeel;
