import React from "react";

import classes from "./Header.module.css";

import Card from "../Card";
import WeatherCardHeaderContent from "./WeatherCardHeaderContent";

function Header() {
  return (
    <Card WRAPPER="header" className={classes.header}>
      <Card WRAPPER="div" className={classes["header-content-wrapper"]}>
        <WeatherCardHeaderContent />
      </Card>
    </Card>
  );
}

export default Header;
