import React, { useEffect, Suspense, lazy } from "react";

import loadingClasses from "../src/components/UI/Loading/Loading.module.css";
import geolocationButtonClasses from "../src/components/UI/GeolocationButton.module.css";
import searchInputClasses from "../src/components/UI/Search/Search.module.css";

import Card from "./components/UI/Card.jsx";
import Header from "./components/UI/Header/Header.jsx";
import Search from "./components/UI/Search/Search.jsx";
import SectionDivider from "./components/UI/SectionDivider/SectionDivider.jsx";
import WeatherCard from "./components/WeatherBasicCard/WeatherCardMain/WeatherCard.jsx";
import Loading from "./components/UI/Loading/Loading.jsx";
import Button from "./components/UI/Button.jsx";
import FavoriteCities from "./components/UI/FavoriteCities/FavoriteCities.jsx";

import { useWeatherContext } from "./context/WeatherContext.jsx";
import { useWeatherData } from "./hooks/useWeatherData.js";
import { useUserLocationWeather } from "./hooks/useUserLocationWeather.js";

// lazy loading
const WeatherDetailsCard = lazy(() =>
  import(
    "./components/WeatherDetailsCard/WeatherDetailsMain/WeatherDetailsCard.jsx"
  )
);

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const { state } = useWeatherContext();
  const { fetchCityWeather } = useWeatherData(API_KEY);
  const { fetchWeatherByUserLocation } = useUserLocationWeather(API_KEY);

  const { city, weatherData, isLoading, error, isWeatherDetailsVisible } =
    state;

  useEffect(() => {
    // Only fetch city weather once the user has submitted his search
    if (city) {
      fetchCityWeather(city);
    }
  }, [city]);

  return (
    <>
      <Header />
      <main>
        <SectionDivider />
        {!isWeatherDetailsVisible && (
          <Search searchInputClassName={searchInputClasses["search-wrapper"]} />
        )}
        <Card
          WRAPPER="div"
          className={geolocationButtonClasses["geolocation-btn-wrapper"]}
        >
          <Button
            className={geolocationButtonClasses["geolocation-btn"]}
            callback={() => fetchWeatherByUserLocation()}
          >
            Use current location
          </Button>
        </Card>
        {!isWeatherDetailsVisible && !weatherData && !isLoading && !error && (
          <p className="no-data-placeholder">
            Enter a city to get weather details.
          </p>
        )}
        {isLoading && !isWeatherDetailsVisible && (
          <Loading className={loadingClasses["loading-text"]}>
            Loading...
          </Loading>
        )}
        {error && !isWeatherDetailsVisible && (
          <p className="no-data-fetch">{error}</p>
        )}
        {!isWeatherDetailsVisible && weatherData && <WeatherCard />}
        <Suspense
          fallback={
            <Loading className={loadingClasses["loading-text"]}>
              Loading...
            </Loading>
          }
        >
          {isWeatherDetailsVisible && <WeatherDetailsCard />}
        </Suspense>
        <SectionDivider />
        <FavoriteCities />
      </main>
    </>
  );
}

export default App;
