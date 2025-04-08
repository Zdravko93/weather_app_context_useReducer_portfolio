import React from "react";

import classes from "./WeatherConditions.module.css";

import Card from "../../UI/Card";
import Image from "../../UI/Image";
import WeatherCardCurrentTemperature from "../WeatherCardCurrentTemperature/WeatherCardCurrentTemperature";
import { useWeatherContext } from "../../../context/WeatherContext";

function WeatherConditions() {
  const { state } = useWeatherContext();
  const { weatherData } = state;
  const { main } = weatherData.weather[0];
  const icon = weatherData.weather[0].icon;
  // dynamic image 'src' value for weather card
  const weatherImgSrc = `http://openweathermap.org/img/wn/${icon}.png` || ""; // fallback to an empty string - avoid breaking he UI/APP

  return (
    <Card WRAPPER="div" className={classes["weather-conditions"]}>
      <Image
        imgSrc={weatherImgSrc}
        altText={`Weather icon representing ${main.toLowerCase()} weather conditions.`}
      />
      <WeatherCardCurrentTemperature />
    </Card>
  );
}

export default WeatherConditions;
