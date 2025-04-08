import React from "react";

import classes from "../Visibility/VisibilityDescription.module.css";

import Card from "../../UI/Card";
import Image from "../../UI/Image";
import {
  convertVisibilityToKm,
  getVisibilityMark,
} from "../../../utils/utilsVisibilityData";
// context
import { useWeatherContext } from "../../../context/WeatherContext";

function VisibilityDescription() {
  const { state } = useWeatherContext();
  const { forecastData } = state;

  if (!forecastData || !forecastData.list) return null;
  const visibility = forecastData.list[0].visibility;
  // convert unit to km
  const visibilityInKm = convertVisibilityToKm(visibility);

  const { mark, description } = getVisibilityMark(visibilityInKm);

  return (
    <Card WRAPPER="div" className={classes["visibility-description"]}>
      <p id="visibility-description">{description}</p>
      <Image
        imgSrc={mark}
        altText={`Visibility mark indicating: ${description}`}
        ariaDescribedBy="visibility-description"
      />
    </Card>
  );
}

export default VisibilityDescription;
