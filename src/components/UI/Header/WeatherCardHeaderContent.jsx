import React from "react";

import appLogo from "../../../assets/weather-app-logo.png";

import classes from "./WeatherCardHeaderContent.module.css";

import Card from "../Card";
import Image from "../Image";

function WeatherCardHeaderContent() {
  return (
    <Card WRAPPER="div" className={classes["header-flex-group"]}>
      <Image imgSrc={appLogo} altText="Weather app logo" />
      <h1>MyForecast</h1>
    </Card>
  );
}

export default WeatherCardHeaderContent;
