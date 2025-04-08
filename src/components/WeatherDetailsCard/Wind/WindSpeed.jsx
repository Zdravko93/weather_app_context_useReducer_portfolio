import React from "react";

import classes from "./WindSpeed.module.css";

import { convertWindSpeed } from "../../../utils/utilsWindData";

import Card from "../../UI/Card";
import { useWeatherContext } from "../../../context/WeatherContext";

function WindSpeed({ isMetric }) {
  const { state } = useWeatherContext();
  const { windData } = state;

  const windSpeed = convertWindSpeed(windData.speed, isMetric);
  const windUnit = isMetric ? "km/h" : "m/s";

  return (
    <Card WRAPPER="div" className={classes["weather-number-unit-group"]}>
      <p aria-describedby="wind-title">
        <span id="wind-speed" aria-describedby="wind-title">
          {windSpeed}
        </span>
        <span
          id="wind-unit"
          aria-describedby="wind-title"
        >{`${windUnit}`}</span>
      </p>
    </Card>
  );
}

export default WindSpeed;
