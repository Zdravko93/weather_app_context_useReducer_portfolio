import { useEffect } from "react";
import {
  fetchWeatherByCity,
  fetchAdditionalWeatherData,
} from "../utils/weatherAPI";
import { getSunriseSunsetTimes } from "../utils/utilsSunriseSunsetTimes";
import { getWindDirection } from "../utils/utilsWindData";
import { useWeatherContext } from "../context/WeatherContext";

// custom hook for using weather data
export const useWeatherData = (API_KEY) => {
  const { dispatch } = useWeatherContext();

  const fetchCityWeather = async (city) => {
    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "SET_FADE_IN", payload: false });

    try {
      const weatherData = await fetchWeatherByCity(city, API_KEY);
      dispatch({ type: "SET_WEATHER_DATA", payload: weatherData });
      const { lat, lon } = weatherData.coord;
      const { airQualityData, forecastData, uvIndexData } =
        await fetchAdditionalWeatherData(lat, lon, API_KEY);

      dispatch({ type: "SET_AIR_QUALITY_DATA", payload: airQualityData });
      dispatch({ type: "SET_FORECAST_DATA", payload: forecastData });
      dispatch({ type: "SET_UV_INDEX", payload: uvIndexData.value });
      dispatch({ type: "SET_HUMIDITY", payload: weatherData.main.humidity });
      // Get sunrise and sunset times
      const sunriseTime = getSunriseSunsetTimes(weatherData.sys.sunrise);
      const sunsetTime = getSunriseSunsetTimes(weatherData.sys.sunset);
      dispatch({
        type: "SET_SUNRISE_SUNSET",
        payload: { sunrise: sunriseTime, sunset: sunsetTime },
      });
      // Set wind data
      const windData = {
        speed: weatherData.wind.speed,
        direction: getWindDirection(weatherData.wind.deg),
      };
      dispatch({ type: "SET_WIND_DATA", payload: windData });

      dispatch({ type: "SET_ERROR", payload: null });
    } catch (error) {
      dispatch({ type: "SET_ERROR", payload: error.message });
      dispatch({ type: "SET_WEATHER_DATA", payload: null });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
      dispatch({ type: "SET_FADE_IN", payload: true });
    }
  };

  return { fetchCityWeather };
};
