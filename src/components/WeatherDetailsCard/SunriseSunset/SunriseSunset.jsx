import React from "react";

import sunsetImg from "../../../assets/sunset.png";
import sunriseImg from "../../../assets/sunrise.png";

import classes from "./SunriseSunset.module.css";
import weatherDetailsCardClasses from "../../WeatherDetailsCard/WeatherDetailsMain/WeatherDetailsCard.module.css";

import Card from "../../UI/Card";
import TimeData from "./TimeData";
// context
import { useWeatherContext } from "../../../context/WeatherContext";

function SunriseSunset() {
  const { state } = useWeatherContext();
  const { sunrise, sunset, isCitySearched } = state;

  return (
    <Card
      className={`${weatherDetailsCardClasses["weather-details-box"]} ${
        isCitySearched ? weatherDetailsCardClasses["fade-in"] : ""
      }`}
    >
      <h5 id="sunrise-sunset-title">Sunrise & Sunset</h5>
      <Card WRAPPER="div" className={classes["weather-details-sunrise-sunset"]}>
        <TimeData
          time={sunrise}
          timeSuffix="AM"
          imgSrc={sunriseImg}
          imgAltText="An illustration of the sunrise"
        />
        <TimeData
          time={sunset}
          timeSuffix="PM"
          imgSrc={sunsetImg}
          imgAltText="An illustration of the sunset"
        />
      </Card>
    </Card>
  );
}

export default SunriseSunset;
