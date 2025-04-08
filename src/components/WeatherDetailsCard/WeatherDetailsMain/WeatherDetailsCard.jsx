import React, { useState, useEffect } from "react";

import classes from "./WeatherDetailsCard.module.css";
import unitToggleClasses from "../../UI/ToggleUnit/ToggleUnit.module.css";
import loadingClasses from "../../UI/Loading/Loading.module.css";
import themeSwitcherWeatherDetailsClasses from "../../UI/ThemeSwitcher/ThemeSwitcher.module.css";

import Card from "../../UI/Card.jsx";
import Loading from "../../UI/Loading/Loading.jsx";
import DetailsArrowBack from "../ArrowBack/DetailsArrowBack.jsx";
import ForecastCity from "../ForecastCity/ForecastCity.jsx";
import FiveDaysForecast from "../FiveDaysForecast/FiveDaysForecast.jsx";
import UV from "../UV/UV.jsx";
import Wind from "../Wind/Wind.jsx";
import SunriseSunset from "../SunriseSunset/SunriseSunset.jsx";
import Humidity from "../Humidity/Humidity.jsx";
import Visibility from "../Visibility/Visibility.jsx";
import Pollutants from "../Pollutants/Pollutants.jsx";
import WeatherDetailsHeader from "../WeatherDetailsHeader.jsx";
import ThemeSwitcher from "../../UI/ThemeSwitcher/ThemeSwitcher.jsx";
import { getNextFiveDays } from "../../../utils/utilsForecastData.js";
import { useCityTime } from "../../../hooks/useCityTime.js";
//context
import { useWeatherContext } from "../../../context/WeatherContext.jsx";

function WeatherDetailsCard() {
  // context
  const { state } = useWeatherContext();
  const {
    forecastData,
    isCelsius,
    error,
    isLoading: forecastIsLoading,
    isWeatherDetailsVisible,
  } = state;

  // get  states from custom hook
  const { currentTime, currentDayOfWeek, currentDate } =
    useCityTime(forecastData);
  // get next 5 days
  const daysOfWeek = getNextFiveDays(currentDayOfWeek);

  const [fadeIn, setFadeIn] = useState(false);

  // dynamic classes for unit buttons
  const celsiusBtnClass = isCelsius
    ? unitToggleClasses["weather-details-unit-accent"]
    : "";
  const fahrenheitBtnClass = !isCelsius
    ? unitToggleClasses["weather-details-unit-accent"]
    : "";

  useEffect(() => {
    // trigger fade in effect to transition weather details card
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []); // run this only once, on component mount

  return (
    <Card
      WRAPPER="div"
      className={`${classes["weather-details-main-flex"]} ${
        fadeIn ? classes["fade-in"] : ""
      }`}
    >
      <DetailsArrowBack />
      <Card WRAPPER="div" className={classes["weather-details-wrapper"]}>
        <ThemeSwitcher
          className={themeSwitcherWeatherDetailsClasses["weather-details"]}
        />
        <WeatherDetailsHeader
          celsiusBtnClass={`${unitToggleClasses["weather-details-toggle-celsius-btn"]} ${celsiusBtnClass}`}
          fahrenheitBtnClass={`${unitToggleClasses["weather-details-toggle-fahrenheit-btn"]} ${fahrenheitBtnClass}`}
          toggleUnitsWrapperClass={unitToggleClasses["toggle-units-wrapper"]}
        />
        {forecastIsLoading && isWeatherDetailsVisible ? (
          <Loading className={loadingClasses["weather-details-loading-text"]}>
            Loading forecast data...
          </Loading>
        ) : (
          error && <p className="no-data-fetch">{error}</p>
        )}
        <ForecastCity
          currentTime={currentTime}
          currentDay={currentDayOfWeek}
          currentDate={currentDate}
        />
        <FiveDaysForecast daysOfWeek={daysOfWeek} />
        <Card WRAPPER="div" className={classes["weather-details-main"]}>
          <h4>Today's Highlights</h4>
          <ul className={classes["weather-details-boxes"]}>
            <UV />
            <Wind />
            <SunriseSunset />
            <Humidity />
            <Visibility />
            <Pollutants />
          </ul>
        </Card>
      </Card>
    </Card>
  );
}

export default WeatherDetailsCard;
