import React from "react";

import unitToggleClasses from "../UI/ToggleUnit/ToggleUnit.module.css";
import WeatherDetailsCardClasses from "../WeatherDetailsCard/WeatherDetailsMain/WeatherDetailsCard.module.css";
import searchInputClasses from "../UI/Search/Search.module.css";

import Card from "../UI/Card";
import Search from "../UI/Search/Search";
import ToggleUnit from "../UI/ToggleUnit/ToggleUnit";

function WeatherDetailsHeader({
  celsiusBtnClass,
  fahrenheitBtnClass,
  toggleUnitsWrapperClass,
}) {
  const weatherDetailsHeaderSearchClass = `${searchInputClasses["search-wrapper"]} ${searchInputClasses["weather-details-search-wrapper"]}`;

  return (
    <Card
      WRAPPER="header"
      className={WeatherDetailsCardClasses["weather-details-header"]}
    >
      <h1 id="forecast-title">5-day forecast</h1>
      <Card WRAPPER="div">
        <Search
          searchInputClassName={weatherDetailsHeaderSearchClass}
          ariaText="Search city"
          isDetailsHeaderSuggestions={true}
        />
      </Card>
      <ToggleUnit
        celsiusBtnClass={`${unitToggleClasses["weather-details-toggle-celsius-btn"]} ${celsiusBtnClass}`}
        fahrenheitBtnClass={`${unitToggleClasses["weather-details-toggle-fahrenheit-btn"]} ${fahrenheitBtnClass}`}
        toggleUnitsWrapperClass={toggleUnitsWrapperClass}
      />
    </Card>
  );
}

export default WeatherDetailsHeader;
