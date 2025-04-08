import React from "react";

import classes from "./TimeData.module.css";

import Card from "../../UI/Card";
import Image from "../../UI/Image";
import RenderTimeData from "./RenderTimeData";

function TimeData({ time, timeSuffix, imgSrc, imgAltText }) {
  return (
    <Card WRAPPER="div" className={classes["time-details"]}>
      <Image imgSrc={imgSrc} altText={imgAltText} />
      <RenderTimeData time={time} timeSuffix={timeSuffix} />
    </Card>
  );
}

export default TimeData;
