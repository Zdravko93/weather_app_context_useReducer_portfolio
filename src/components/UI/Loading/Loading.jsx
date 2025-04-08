import React from "react";

import classes from "./Loading.module.css";

import Card from "../../UI/Card";

function Loading({ children, className }) {
  return (
    <Card WRAPPER="div" className={classes["loading-wrapper"]}>
      <div className={classes["loader"]}></div>
      <p className={className}>{children}</p>
    </Card>
  );
}

export default Loading;
