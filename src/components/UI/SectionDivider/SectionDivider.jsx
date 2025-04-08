import React from "react";

import classes from "./SectionDivider.module.css";

import Card from "../Card";

function SectionDivider() {
  return <Card WRAPPER="div" className={classes["section-divider"]}></Card>;
}

export default SectionDivider;
