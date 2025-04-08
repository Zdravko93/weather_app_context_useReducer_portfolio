import React, { useState, useEffect } from "react";

import classes from "./UVChart.module.css";

import Card from "../../UI/Card";
import { useWeatherContext } from "../../../context/WeatherContext";

export default function UVChart() {
  const { state } = useWeatherContext();
  const { uvIndex, error } = state;

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    setRotation((uvIndex / 14) * 360);
  }, [uvIndex]);

  let uvClass;
  if (uvIndex <= 2) uvClass = "circle-bar-low;";
  else if (uvIndex <= 5) uvClass = "circle-bar-moderate";
  else if (uvIndex <= 7) uvClass = "circle-bar-high";
  else if (uvIndex <= 10) uvClass = "circle-bar-very-high";
  else if (uvIndex <= 14) uvClass = "circle-bar-extreme";

  return (
    <Card WRAPPER="div" className={classes.meter}>
      <Card WRAPPER="div" className={classes["circle-background"]}></Card>
      <Card
        WRAPPER="div"
        className={`${classes["circle-bar"]} ${classes[uvClass]} ${classes["circle-bar-rotate"]}`}
        style={{
          "--rotation": `${rotation}deg`,
        }}
      ></Card>
      <p aria-describedby="uv-title" className={classes["center-text"]}>
        {!error ? (
          <>
            <span id="uv-index" aria-labelledby="uv-index-label">
              {uvIndex}
            </span>
          </>
        ) : (
          <span id="uv-error" aria-describedby="uv-title" aria-live="assertive">
            There was an error loading the UV data.
          </span>
        )}
      </p>
    </Card>
  );
}
