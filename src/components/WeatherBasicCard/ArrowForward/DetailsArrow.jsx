import React from "react";

import classes from "../../UI/DetailsArrow.module.css";

import ArrowRight from "./ArrowRight";
import Button from "../../UI/Button";
import { useWeatherContext } from "../../../context/WeatherContext";

export default function DetailsArrow() {
  const { state, dispatch } = useWeatherContext();
  const { isWeatherDetailsVisible, fadeIn } = state;

  return (
    <Button
      aria-label="View weather details"
      className={`${classes["details-arrow-btn"]} ${
        fadeIn ? classes["fade-in"] : ""
      }`}
      callback={() =>
        dispatch({ type: "TOGGLE_WEATHER_DETAILS", payload: true })
      }
      ariaExpanded={isWeatherDetailsVisible ? "true" : "false"}
    >
      <ArrowRight className={classes["details-arrow"]} />
      <span className={classes.tooltip} role="tooltip">
        View details
      </span>
    </Button>
  );
}
