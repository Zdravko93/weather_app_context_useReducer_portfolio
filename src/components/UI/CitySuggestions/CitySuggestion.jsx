import React from "react";
import { useCitySearch } from "../../../hooks/useCitySearch";

export default function CitySuggestion({ suggestion }) {
  const { handleCitySearch } = useCitySearch();

  return (
    <li onClick={() => handleCitySearch()}>
      {suggestion.name}, {suggestion.sys.country}
    </li>
  );
}
