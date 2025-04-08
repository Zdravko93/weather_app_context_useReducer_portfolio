import React from "react";

import toggleThemeIcon from "../../../assets/toggle-theme-icon.png";

import classes from "./ThemeSwitcher.module.css";

import { useTheme } from "../../../context/ThemeContext";
import Button from "../Button";
import Image from "../Image";

function ThemeSwitcher({ className }) {
  const { toggleTheme } = useTheme();

  return (
    <Button
      callback={toggleTheme}
      className={`${classes["theme-switcher-btn"]} ${className}`}
    >
      <Image
        imgSrc={toggleThemeIcon}
        altText="Toggle theme between light and dark"
      />
    </Button>
  );
}

export default ThemeSwitcher;
