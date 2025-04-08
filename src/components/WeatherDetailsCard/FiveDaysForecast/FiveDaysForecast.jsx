import React, { useState, useEffect } from "react";

import classes from "./FiveDaysForecast.module.css";

import Card from "../../UI/Card";
import ForecastCard from "../FiveDaysForecast/ForecastCard";

import { renderForecastData } from "../../../utils/utilsForecastData";
// context
import { useWeatherContext } from "../../../context/WeatherContext";

function FiveDaysForecast({ daysOfWeek }) {
  const { state } = useWeatherContext();
  const { forecastData, weatherData, isCelsius } = state;

  const weatherMainDescription =
    weatherData?.weather?.[0]?.main || "Weather data not available";

  // get forecast array
  const { forecast } = renderForecastData(forecastData, isCelsius);

  // local piece of state to handle fade-in
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // trigger fade-in effect after a slight delay
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100); // delay before cards fade in

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card WRAPPER="div" className={classes["weather-details-forecast"]}>
      <ul>
        {forecast.map((dayData, index) => (
          // here is best to avoid 'index' as a 'key' prop value, since it will not work in cases where the order of the array items changes
          // in this case I am providing more flexible prop value
          <ForecastCard
            key={dayData.date.toString()}
            index={index}
            daysOfWeek={daysOfWeek}
            weatherIconUrl={dayData.weatherIconUrl}
            maxTemp={dayData.maxTemp}
            minTemp={dayData.minTemp}
            unit={dayData.unit}
            weatherMainDescription={weatherMainDescription}
            fadeIn={fadeIn}
            delay={index * 100}
          />
        ))}
      </ul>
    </Card>
  );
}

export default FiveDaysForecast;
