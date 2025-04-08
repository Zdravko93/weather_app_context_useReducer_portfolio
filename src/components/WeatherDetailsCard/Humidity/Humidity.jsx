import React from "react";

import classes from "./Humidity.module.css";
import weatherDetailsCardClasses from "../WeatherDetailsMain/WeatherDetailsCard.module.css";

import Card from "../../UI/Card";
import HumidityDescription from "./HumidityDescription";
// context
import { useWeatherContext } from "../../../context/WeatherContext";

function Humidity() {
  // context
  const { state } = useWeatherContext();
  const { humidity, isCitySearched } = state;

  return (
    <Card
      className={`${weatherDetailsCardClasses["weather-details-box"]} ${
        isCitySearched ? weatherDetailsCardClasses["fade-in"] : ""
      }`}
    >
      <h5 id="humidity-title">Humidity</h5>
      <Card WRAPPER="div" className={classes.humidity}>
        <p
          aria-labelledby="humidity-title"
          className={classes["humidity-percentage"]}
        >
          {humidity}%
        </p>
        <HumidityDescription />
      </Card>
    </Card>
  );
}

export default Humidity;
