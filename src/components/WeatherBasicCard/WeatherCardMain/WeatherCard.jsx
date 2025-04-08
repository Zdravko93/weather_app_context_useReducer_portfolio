import React from "react";

import classes from "./WeatherCard.module.css";
import unitToggleClasses from "../../UI/ToggleUnit/ToggleUnit.module.css";

import DetailsArrow from "../ArrowForward/DetailsArrow";
import ToggleUnit from "../../UI/ToggleUnit/ToggleUnit";
import AirQuality from "../AirQuality/AirQuality";
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import Card from "../../UI/Card";
import ThemeSwitcher from "../../UI/ThemeSwitcher/ThemeSwitcher";
// context
import { useWeatherContext } from "../../../context/WeatherContext";

function WeatherCard({}) {
  // context
  const { state } = useWeatherContext();
  const { weatherData, fadeIn, isCelsius } = state;
  const { main } = weatherData.weather[0];

  // dynamic class for weather card background
  const weatherBackgroundImageClass = classes[main.toLowerCase()] || "";

  // dynamic classes for toggling between celsius and fahrenheit units
  const celsiusBtnClass = isCelsius ? unitToggleClasses["unit-accent"] : "";
  const fahrenheitBtnClass = !isCelsius ? unitToggleClasses["unit-accent"] : "";

  return (
    <Card WRAPPER="div" className={classes["weather-arrow-group-wrapper"]}>
      <Card
        WRAPPER="div"
        className={`${classes["weather-card"]} ${weatherBackgroundImageClass} ${
          fadeIn ? classes["fade-in"] : ""
        }`}
      >
        <Card WRAPPER="section" className={classes["weather-headers"]}>
          <h1 id="city-title">{weatherData.name}</h1>
          <h2 id="country-title">{weatherData.sys.country}</h2>
        </Card>
        <ToggleUnit
          celsiusBtnClass={`${unitToggleClasses["toggle-celsius-btn"]} ${celsiusBtnClass}`}
          fahrenheitBtnClass={`${unitToggleClasses["toggle-fahrenheit-btn"]} ${fahrenheitBtnClass}`}
          toggleUnitsWrapperClass={unitToggleClasses["toggle-units-wrapper"]}
        />
        <AirQuality />
        <WeatherInfo />
        <ThemeSwitcher />
      </Card>
      <DetailsArrow />
    </Card>
  );
}

export default WeatherCard;
