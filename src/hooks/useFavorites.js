import { useWeatherContext } from "../context/WeatherContext";

export const useFavorites = () => {
  const { state, dispatch } = useWeatherContext();
  const { favoriteCities } = state;

  // Add city to favorites
  const handleAddToFavorites = (city) => {
    if (!favoriteCities.includes(city)) {
      const updatedFavorites = [...favoriteCities, city];
      localStorage.setItem("favoriteCities", JSON.stringify(updatedFavorites));
      dispatch({ type: "SET_FAVORITE_CITIES", payload: updatedFavorites });
    }
  };

  // Remove city from favorites
  const handleRemoveFromFavorites = (city) => {
    const updatedFavorites = favoriteCities.filter(
      (favoriteCity) => favoriteCity !== city
    );
    localStorage.setItem("favoriteCities", JSON.stringify(updatedFavorites));
    dispatch({ type: "SET_FAVORITE_CITIES", payload: updatedFavorites });
  };

  return {
    handleAddToFavorites,
    handleRemoveFromFavorites,
    favoriteCities,
  };
};
