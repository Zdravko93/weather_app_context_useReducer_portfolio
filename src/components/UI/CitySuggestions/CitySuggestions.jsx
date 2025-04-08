import React, { forwardRef } from "react";

import classes from "./CitySuggestions.module.css";
import CitySuggestion from "./CitySuggestion";
import { useWeatherContext } from "../../../context/WeatherContext"; // context hook

// Wrap the component in forwardRef to correctly forward the ref
const CitySuggestions = forwardRef(({ detailsHeaderSuggestionsClass }, ref) => {
  const { state } = useWeatherContext(); // pull context data
  const { suggestions } = state; // extract suggestions from the context state

  return (
    <ul
      ref={ref}
      className={`${classes["suggestions-list"]} ${detailsHeaderSuggestionsClass}`}
    >
      {suggestions.map((suggestion) => (
        <CitySuggestion key={suggestion.id} suggestion={suggestion} />
      ))}
    </ul>
  );
});

export default CitySuggestions;
