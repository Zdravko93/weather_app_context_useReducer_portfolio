import React from "react";

import classes from "./HumidityDescription.module.css";

import Card from "../../UI/Card";
import Image from "../../UI/Image";
import { getHumidityMark } from "../../../utils/utilsHumidityData";
// context
import { useWeatherContext } from "../../../context/WeatherContext";

function HumidityDescription() {
  const { state } = useWeatherContext();
  const { humidity } = state;

  const { mark, description } = getHumidityMark(humidity);

  return (
    <Card WRAPPER="div" className={classes["humidity-description"]}>
      <p
        aria-describedby="humidity-description"
        className={classes["humidity-text"]}
      >
        {description}
      </p>
      <Image imgSrc={mark} altText={`Humidity mark - ${description}`} />
    </Card>
  );
}

export default HumidityDescription;
