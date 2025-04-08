import React from "react";

import classes from "./UV.module.css";
import weatherDetailsCardClasses from "../WeatherDetailsMain/WeatherDetailsCard.module.css";

import Card from "../../UI/Card";
import UVDescription from "../UV/UVDescription";
import UVChart from "../UV/UVChart";
// context
import { useWeatherContext } from "../../../context/WeatherContext";

function UV() {
  const { state } = useWeatherContext();
  const { isCitySearched } = state;

  return (
    <Card
      className={`${weatherDetailsCardClasses["weather-details-box"]} ${
        isCitySearched ? weatherDetailsCardClasses["fade-in"] : ""
      }`}
    >
      <h5 id="uv-title">UV Index</h5>
      <Card WRAPPER="div" className={classes["weather-details-uv-index"]}>
        <UVChart />
        <UVDescription />
      </Card>
    </Card>
  );
}

export default UV;
