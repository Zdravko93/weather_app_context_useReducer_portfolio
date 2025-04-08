import React from "react";

import classes from "./AirQuality.module.css";

import Card from "../../UI/Card";
import { getAQIDescription } from "../../../utils/utilsAirQuality";
import { getAQIClasses } from "../../../utils/utilsAirQuality";
import { useWeatherContext } from "../../../context/WeatherContext";

export default function AirQuality() {
  // context
  const { state } = useWeatherContext();
  const { airQualityData } = state; // airQuality data to extract Air Quality Index
  const aqi = airQualityData?.list?.[0]?.main?.aqi ?? "N/A"; // Air Quality Index
  const airQualityDescription = getAQIDescription(aqi); // Air Quality Index Description
  // dynamic descriptive classes for Air Quality Index
  const airQualityIndexClass = getAQIClasses(aqi);

  return (
    <Card WRAPPER="div" className={classes["air-quality"]}>
      <h3 id="air-quality-title" className={classes["air-quality-header"]}>
        Air Quality
      </h3>
      <p
        id="air-quality-index"
        aria-describedby="air-quality-title"
        className={`${classes["air-quality-index"]} ${classes[airQualityIndexClass]}`}
      >
        {aqi}
      </p>
      <p
        id="air-quality-description"
        aria-describedby="air-quality-title"
        className={classes["air-quality-description"]}
      >
        {airQualityDescription}
      </p>
    </Card>
  );
}
