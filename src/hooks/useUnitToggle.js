import { useWeatherContext } from "../context/WeatherContext";

export const useUnitToggle = () => {
  const { dispatch } = useWeatherContext();

  // Unit toggle (Celsius/Fahrenheit)
  const handleUnitToggle = (unit) => {
    dispatch({ type: "TOGGLE_UNIT", payload: unit });
  };

  return { handleUnitToggle };
};
