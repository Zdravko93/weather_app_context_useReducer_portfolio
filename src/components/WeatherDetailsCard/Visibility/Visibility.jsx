import React from "react";

import classes from "./Visibility.module.css";
import weatherDetailsCardClasses from "../../WeatherDetailsCard/WeatherDetailsMain/WeatherDetailsCard.module.css";

import Card from "../../UI/Card";
import VisibilityDescription from "../Visibility/VisibilityDescription";
import RenderVisibilityData from "../Visibility/RenderVisibilityData";
// context
import { useWeatherContext } from "../../../context/WeatherContext";

function Visibility() {
  const { state } = useWeatherContext();
  const { isCitySearched } = state;

  return (
    <Card
      WRAPPER="div"
      className={`${weatherDetailsCardClasses["weather-details-box"]} ${
        isCitySearched ? weatherDetailsCardClasses["fade-in"] : ""
      }`}
    >
      <Card WRAPPER="div" className={classes.visibility}>
        <h5 id="visibility-title">Visibility</h5>
        <RenderVisibilityData />
        <VisibilityDescription />
      </Card>
    </Card>
  );
}

export default Visibility;
