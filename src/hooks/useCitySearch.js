import { useCallback } from "react";
import { useWeatherContext } from "../context/WeatherContext";

export const useCitySearch = () => {
  const { state, dispatch } = useWeatherContext();
  const { searchQuery, city } = state;

  const handleCitySearch = useCallback(() => {
    if (searchQuery.trim() && searchQuery.trim() !== city) {
      dispatch({ type: "SET_CITY", payload: searchQuery.trim() });
      dispatch({ type: "SET_CITY_SEARCHED", payload: true });
      dispatch({ type: "SET_LOCATION_WEATHER_FETCHED", payload: false }); // reset flag when a city is searched to allow user to use 'use current  location' button again
      resetInput();
    }
  }, [searchQuery, city]);

  // handle search on 'Enter' press
  const handleEnterKeyDown = (event) => {
    if (event.key === "Enter") {
      handleCitySearch();
    }
  };

  const handleCityForecast = (selectedCity) => {
    dispatch({ type: "SET_CITY", payload: selectedCity });
    dispatch({ type: "SET_CITY_SEARCHED", payload: true });
    dispatch({ type: "SET_LOCATION_WEATHER_FETCHED", payload: false });
    resetInput();
  };

  const resetInput = () => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: "" });
  };

  return {
    handleCitySearch,
    handleEnterKeyDown,
    handleCityForecast,
    resetInput,
  };
};
