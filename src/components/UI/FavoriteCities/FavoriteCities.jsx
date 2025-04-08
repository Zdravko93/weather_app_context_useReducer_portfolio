import React from "react";

import classes from "./FavoriteCities.module.css";

import Card from "../Card";
import Button from "../Button";
import FavoriteCity from "./FavoriteCity";
import { formatCityName } from "../../../utils/utilsFormatCity";
import { useFavorites } from "../../../hooks/useFavorites";
import { useWeatherContext } from "../../../context/WeatherContext"; // context hook

export default function FavoriteCities() {
  // extract from context
  const { state } = useWeatherContext();
  const { city, favoriteCities, isLocationWeatherFetched } = state;
  // extract from the hooks
  const { handleAddToFavorites } = useFavorites();

  // Conditionally render Add to Favorites button
  const showAddToFavorites = city && !favoriteCities.includes(city);

  return (
    <Card WRAPPER="section" className={classes["favorite-cities-wrapper"]}>
      <h3>Favorite Cities</h3>
      <ul>
        {favoriteCities.length > 0 ? (
          favoriteCities.map((city, index) => (
            <FavoriteCity key={index} city={city} />
          ))
        ) : (
          <p className={classes["no-favorite-cities"]}>
            No favorite cities added yet.
          </p>
        )}
      </ul>
      {/* Conditionally render Add to Favorites button */}
      {showAddToFavorites && !isLocationWeatherFetched && (
        <Button callback={() => handleAddToFavorites(city)}>
          Add {formatCityName(city)} to Favorites
        </Button>
      )}
    </Card>
  );
}
