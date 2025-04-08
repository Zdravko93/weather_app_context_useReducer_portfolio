import {
  fetchWeatherByGeolocation,
  fetchAdditionalWeatherData,
} from "../utils/weatherAPI";
import { getSunriseSunsetTimes } from "../utils/utilsSunriseSunsetTimes";
import { getWindDirection } from "../utils/utilsWindData";
//context
import { useWeatherContext } from "../context/WeatherContext";

export const useUserLocationWeather = (API_KEY) => {
  const { state, dispatch } = useWeatherContext();
  const { city, isLocationWeatherFetched } = state;

  const fetchWeatherByUserLocation = async () => {
    if (isLocationWeatherFetched) return; // prevent duplicate fetching

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          dispatch({ type: "SET_LOADING", payload: true });
          dispatch({ type: "SET_FADE_IN", payload: false });

          try {
            const weatherData = await fetchWeatherByGeolocation(
              latitude,
              longitude,
              API_KEY
            );
            const cityName = weatherData.name;

            if (cityName !== city) {
              dispatch({ type: "SET_CITY", payload: cityName });
            }

            dispatch({ type: "SET_WEATHER_DATA", payload: weatherData });

            // Fetch other weather-related data
            const { airQualityData, forecastData, uvIndexData } =
              await fetchAdditionalWeatherData(latitude, longitude, API_KEY);
            dispatch({ type: "SET_AIR_QUALITY_DATA", payload: airQualityData });
            dispatch({ type: "SET_FORECAST_DATA", payload: forecastData });
            dispatch({ type: "SET_UV_INDEX", payload: uvIndexData.value });

            // Handle sunrise and sunset times
            const sunriseTime = getSunriseSunsetTimes(weatherData.sys.sunrise);
            const sunsetTime = getSunriseSunsetTimes(weatherData.sys.sunset);
            dispatch({
              type: "SET_SUNRISE_SUNSET",
              payload: { sunrise: sunriseTime, sunset: sunsetTime },
            });

            // Handle wind data
            const windData = {
              speed: weatherData.wind.speed,
              direction: getWindDirection(weatherData.wind.deg),
            };
            dispatch({ type: "SET_WIND_DATA", payload: windData });

            dispatch({ type: "SET_ERROR", payload: null });
            dispatch({ type: "SET_LOCATION_WEATHER_FETCHED", payload: true });
          } catch (error) {
            dispatch({ type: "SET_ERROR", payload: error.message });
            dispatch({ type: "SET_WEATHER_DATA", payload: null });
          } finally {
            dispatch({ type: "SET_LOADING", payload: false });
            dispatch({ type: "SET_FADE_IN", payload: true });
          }
        },
        // Error callback if geolocation fails
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            alert("Geolocation permission denied. Cannot fetch weather data.");
          } else {
            alert("Unable to fetch geolocation data.");
          }
          dispatch({ type: "SET_ERROR", payload: "Geolocation error" });
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return { fetchWeatherByUserLocation };
};
