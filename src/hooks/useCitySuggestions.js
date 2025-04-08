import { useState, useCallback } from "react";
import { debounce } from "lodash";
import { useWeatherContext } from "../context/WeatherContext";
import { fetchCitySuggestions } from "../utils/citySuggestionsAPI";

export const useCitySuggestions = (API_KEY) => {
  const { dispatch } = useWeatherContext();
  const [isLoading, setIsLoading] = useState(false);

  const getCitySuggestions = useCallback(
    debounce(async (query) => {
      setIsLoading(true);
      dispatch({ type: "SET_LOADING", payload: true });

      try {
        const suggestionsData = await fetchCitySuggestions(query, API_KEY);
        dispatch({ type: "SET_SUGGESTIONS", payload: suggestionsData });
      } catch (error) {
        console.error("Error fetching city suggestions", error);
        dispatch({ type: "SET_SUGGESTIONS", payload: [] });
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
        setIsLoading(false);
      }
    }, 300),
    [API_KEY]
  );

  return { getCitySuggestions, isLoading };
};
