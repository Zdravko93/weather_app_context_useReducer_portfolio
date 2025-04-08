import React from "react";

import classes from "./UVDescription.module.css";

import { getUVDescription } from "../../../utils/utilsUvData";
import { useWeatherContext } from "../../../context/WeatherContext";

function UVDescription() {
  const { state } = useWeatherContext();
  const { uvIndex } = state;

  const { text, textColor } = getUVDescription(uvIndex);

  return (
    <p
      id="uv-description"
      aria-describedby="uv-title"
      className={`${classes["uv-description"]} ${classes[textColor]}`}
    >
      {text}
    </p>
  );
}

export default UVDescription;
