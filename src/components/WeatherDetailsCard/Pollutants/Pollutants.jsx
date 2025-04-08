import React from "react";

import classes from "./Pollutants.module.css";
import weatherDetailsCardClasses from "../../WeatherDetailsCard/WeatherDetailsMain/WeatherDetailsCard.module.css";

import Card from "../../UI/Card";
import Pollutant from "../Pollutants/Pollutant";
// context
import { useWeatherContext } from "../../../context/WeatherContext";

function Pollutants() {
  const { state } = useWeatherContext();
  const { airQualityData, isCitySearched } = state;
  const components = airQualityData?.list[0]?.components;

  if (!components) {
    return (
      <p className="no-data" role="status">
        No air quality data available for this location.
      </p>
    );
  }

  return (
    <Card
      WRAPPER="div"
      className={`${weatherDetailsCardClasses["weather-details-box"]} ${
        isCitySearched ? weatherDetailsCardClasses["fade-in"] : ""
      }`}
    >
      <h5 id="pollutants-title">Pollutants</h5>
      <Card WRAPPER="ul" className={classes.pollutants}>
        {Object.entries(components).map(([key, value]) => (
          <Pollutant key={key} pollutant={key} value={value} />
        ))}
      </Card>
    </Card>
  );
}

export default Pollutants;
