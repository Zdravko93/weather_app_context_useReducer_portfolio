import React from "react";

import classes from "./WindOrientation.module.css";

import Card from "../../UI/Card";
import Image from "../../UI/Image";
import { getWindDirectionImage } from "../../../utils/utilsWindData";
import { useWeatherContext } from "../../../context/WeatherContext";

function WindOrientation() {
  const { state } = useWeatherContext();
  const { windData } = state;

  return (
    <Card WRAPPER="div" className={classes["wind-orientation"]}>
      <Image
        imgSrc={getWindDirectionImage(windData.direction)}
        altText="Wind direction"
      />
      <p id="wind-direction" aria-describedby="wind-title">
        {windData.direction}
      </p>
    </Card>
  );
}

export default WindOrientation;
