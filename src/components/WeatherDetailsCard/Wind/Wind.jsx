import React, { useState } from "react";

import classes from "./Wind.module.css";
import weatherDetailsCardClasses from "../WeatherDetailsMain/WeatherDetailsCard.module.css";
import unitToggleClasses from "../../UI/ToggleUnit/ToggleUnit.module.css";

import Card from "../../UI/Card";
import WindSpeed from "./WindSpeed";
import WindOrientation from "./WindOrientation";
import ToggleUnit from "../../UI/ToggleUnit/ToggleUnit";
import Button from "../../UI/Button";
// context
import { useWeatherContext } from "../../../context/WeatherContext";

function Wind() {
  // context
  const { isCitySearched } = useWeatherContext();
  // local piece of state
  const [isMetric, setIsMetric] = useState(true);

  const toggleWindSpeedUnit = () => {
    setIsMetric((prev) => !prev);
  };
  return (
    <Card
      className={`${weatherDetailsCardClasses["weather-details-box"]} ${
        isCitySearched ? weatherDetailsCardClasses["fade-in"] : ""
      }`}
    >
      <h5 id="wind-title">Wind Status</h5>
      <Card WRAPPER="div" className={classes["weather-details-wind"]}>
        <WindSpeed isMetric={isMetric} />
        <Card
          WRAPPER="div"
          ariaRole="group"
          ariaLabelledBy="wind-status-group"
          className={classes["orientation-unit-toggle-group"]}
        >
          <WindOrientation />
          <ToggleUnit>
            <Card
              WRAPPER="div"
              className={unitToggleClasses["toggle-unit-group"]}
            >
              <Button
                ariaText={`Toggle wind speed unit to ${
                  isMetric ? "km/h" : "m/s"
                }$`}
                className={`${unitToggleClasses["toggle-unit-btn"]} ${unitToggleClasses["toggle-unit-btn-wind-speed"]}`}
                callback={toggleWindSpeedUnit}
              >
                {isMetric ? "m/s" : "km/h"}
                <span
                  className={unitToggleClasses["wind-unit-tooltip"]}
                  role="tooltip"
                >
                  Switch
                </span>
              </Button>
            </Card>
          </ToggleUnit>
        </Card>
      </Card>
    </Card>
  );
}

export default Wind;
