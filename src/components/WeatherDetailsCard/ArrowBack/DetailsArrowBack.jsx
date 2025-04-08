import React from "react";

import ArrowLeft from "./ArrowLeft";
import Button from "../../UI/Button";

import classes from "../../UI/DetailsArrow.module.css";

import { useWeatherContext } from "../../../context/WeatherContext";

export default function DetailsArrowBack() {
  const { state, dispatch } = useWeatherContext();
  const { fadeIn, isWeatherDetailsVisible } = state;

  return (
    <Button
      className={`${classes["details-arrow-btn"]} ${
        fadeIn ? classes["fade-in"] : ""
      } ${classes["weather-details-card-btn"]}`}
      callback={() =>
        dispatch({ type: "TOGGLE_WEATHER_DETAILS", payload: false })
      }
      aria-label="Hide weather details"
      ariaExpanded={isWeatherDetailsVisible ? "false" : "true"}
    >
      <ArrowLeft
        className={`${classes["details-arrow"]}  ${classes["weather-details-arrow"]}`}
      />
      <span className={classes.tooltip} role="tooltip">
        Hide details
      </span>
    </Button>
  );
}
