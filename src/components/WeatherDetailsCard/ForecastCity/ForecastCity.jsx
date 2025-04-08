import React from "react";

import classes from "./ForecastCity.module.css";

import Card from "../../UI/Card";
import { useWeatherContext } from "../../../context/WeatherContext";

function ForecastCity({ currentDay, currentDate, currentTime }) {
  const { state } = useWeatherContext();
  const { forecastData } = state;
  const { name } = forecastData.city || (
    <p className="no-data"> "No data available for searched city."</p>
  );

  return (
    <Card
      WRAPPER="div"
      ariaText={`${name} weather forecast`}
      className={classes["forecast-city"]}
    >
      <h2>{name}</h2>
      <Card
        WRAPPER="div"
        ariaText={`${name} current day, date and time`}
        className={classes["forecast-city-day-time"]}
      >
        <h3>
          {currentDay}, {currentDate}
        </h3>
        <p aria-live="polite">{currentTime}</p>
      </Card>
    </Card>
  );
}

export default ForecastCity;
