import React, { useState, useEffect, useRef } from "react";

import searchIcon from "../../../assets/search-icon.png";
import searchInputClasses from "./Search.module.css";
import suggestionsListWeatherDetailsCardClasses from "../CitySuggestions/CitySuggestions.module.css";

import Card from "../../UI/Card";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import Image from "../../UI/Image";
import CitySuggestions from "../CitySuggestions/CitySuggestions";

import { useWeatherContext } from "../../../context/WeatherContext";
import { useCitySearch } from "../../../hooks/useCitySearch";
import { useCitySuggestions } from "../../../hooks/useCitySuggestions";

function Search({ searchInputClassName, isDetailsHeaderSuggestions }) {
  const { state, dispatch } = useWeatherContext(); // pull global state from context
  const { API_KEY, searchQuery, suggestions, isLoading } = state; // extract neccessary data

  // extract from custom hook(s)
  const { handleCitySearch, handleEnterKeyDown } = useCitySearch();
  const { getCitySuggestions, isLoading: isCitySuggestionsLoading } =
    useCitySuggestions(API_KEY);

  // local piece of state
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(true);
  const suggestionsRef = useRef(null); // track suggestions container

  //  conditional class for weather details card suggestions container(for the width)
  const detailsHeaderSuggestionsClass = isDetailsHeaderSuggestions
    ? suggestionsListWeatherDetailsCardClasses[
        "suggestions-list-details-header"
      ]
    : "";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setIsSuggestionsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (suggestions.length > 0) {
      setIsSuggestionsVisible(true);
    }
  }, [suggestions]);

  const handleInputFocus = () => {
    if (suggestions.length > 0) {
      setIsSuggestionsVisible(true); // Reopen suggestions if there are any
    }
  };

  return (
    <Card
      WRAPPER="div"
      className={`${searchInputClasses["search-wrapper"]} ${searchInputClassName}`}
    >
      <Button
        ariaText="Search weather for the entered city"
        callback={() => handleCitySearch()}
      >
        <Image
          className={searchInputClasses["search-icon"]}
          imgSrc={searchIcon}
          altText="Searh for a city"
        />
      </Button>
      <Input
        ariaText="Search city"
        className={searchInputClasses.search}
        value={searchQuery}
        onChange={(e) => {
          dispatch({ type: "SET_SEARCH_QUERY", payload: e.target.value });
          getCitySuggestions(e.target.value);
        }}
        onKeyDown={handleEnterKeyDown}
        onFocus={handleInputFocus}
        type="text"
        placeholder="Search city..."
      />
      {/* autocomplete suggestions for cities */}
      {isSuggestionsVisible && suggestions.length > 0 && (
        <CitySuggestions
          ref={suggestionsRef}
          detailsHeaderSuggestionsClass={detailsHeaderSuggestionsClass}
        />
      )}
    </Card>
  );
}

export default Search;
