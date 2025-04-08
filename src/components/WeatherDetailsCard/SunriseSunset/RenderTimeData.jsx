import React from "react";

import classes from "./RenderTimeData.module.css";

import Card from "../../UI/Card";

function RenderTimeData({ time, timeSuffix }) {
  return (
    <Card WRAPPER="div" className={classes["time-data"]}>
      <p aria-describedby="sunrise-sunset-title">{time}</p>
      <span aria-describedby="sunrise-sunset-title">{timeSuffix}</span>
    </Card>
  );
}

export default RenderTimeData;
