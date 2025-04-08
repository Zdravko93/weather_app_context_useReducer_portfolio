import React from "react";

import classes from "../Visibility/RenderVisibilityData.module.css";

import Card from "../../UI/Card";
import { convertVisibilityToKm } from "../../../utils/utilsVisibilityData";
// context
import { useWeatherContext } from "../../../context/WeatherContext";

function RenderVisibilityData() {
  const { state } = useWeatherContext();
  const { forecastData } = state;

  if (!forecastData || !forecastData.list) return null;
  const visibility = forecastData.list[0].visibility;
  // convert unit to km
  const visibilityInKm = convertVisibilityToKm(visibility);

  return (
    <Card WRAPPER="div">
      <p
        aria-labelledby="visibility-title"
        className={classes["visibility-distance"]}
      >
        {visibilityInKm}
        <span>km</span>
      </p>
    </Card>
  );
}

export default RenderVisibilityData;
