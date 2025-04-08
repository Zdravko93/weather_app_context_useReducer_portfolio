import React, { useState, useEffect } from "react";

import classes from "./ForecastCard.module.css";

import Card from "../../UI/Card";
import Image from "../../UI/Image";

function ForecastCard({
  index,
  daysOfWeek,
  weatherIconUrl,
  maxTemp,
  minTemp,
  unit,
  weatherMainDescription,
  fadeIn,
  delay,
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (fadeIn) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay); // apply delay to each card
      return () => clearTimeout(timer);
    }
  }, [fadeIn, delay]);

  return (
    <Card
      className={`${classes["day-details"]} ${
        isVisible ? classes["fade-in"] : ""
      } ${isVisible ? classes["day-details-delay"] : ""}`}
      style={{ transitionDelay: `${delay}ms` }} // staggered delay
    >
      <h5>{daysOfWeek[index]}</h5>
      <Image
        imgSrc={weatherIconUrl}
        altText={`${weatherMainDescription} weather icon for ${daysOfWeek[index]}`}
      />
      <Card WRAPPER="div" className={classes["day-temperatures"]}>
        <b>
          {maxTemp}
          {unit}
        </b>
        <small>
          {minTemp}
          {unit}
        </small>
      </Card>
    </Card>
  );
}

export default ForecastCard;
