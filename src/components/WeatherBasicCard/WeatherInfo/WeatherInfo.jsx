import React from "react";

import classes from "./WeatherInfo.module.css";

import Card from "../../UI/Card";
import WeatherConditions from "../WeatherConditions/WeatherConditions";
import RealFeel from "../../WeatherBasicCard/RealFeel/RealFeel";
import { useWeatherContext } from "../../../context/WeatherContext";

function WeatherInfo() {
  // context
  const { state } = useWeatherContext();
  const { weatherData } = state;
  const { main, description } = weatherData.weather[0];

  return (
    <Card WRAPPER="section" className={classes["weather-info"]}>
      <h3 aria-label={`${main} weather`}>
        {main} ({description})
      </h3>
      <WeatherConditions />
      <RealFeel />
    </Card>
  );
}

export default WeatherInfo;
