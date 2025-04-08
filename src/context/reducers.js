export const initialState = {
  API_KEY: process.env.REACT_APP_API_KEY,
  searchQuery: "",
  city: null,
  suggestions: [],
  weatherData: null,
  forecastData: null,
  airQualityData: null,
  uvIndex: null,
  windData: null,
  sunrise: null,
  sunset: null,
  humidity: null,
  error: null,
  isLoading: false,
  fadeIn: false,
  isCelsius: true,
  isWeatherDetailsVisible: false,
  isCitySearched: false,
  isLocationWeatherFetched: false,
  favoriteCities: JSON.parse(localStorage.getItem("favoriteCities")) || [],
};

export function weatherReducer(state, action) {
  switch (action.type) {
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    case "SET_CITY":
      return { ...state, city: action.payload, suggestions: [] };
    case "SET_SUGGESTIONS":
      return { ...state, suggestions: action.payload };
    case "SET_WEATHER_DATA":
      return { ...state, weatherData: action.payload };
    case "SET_FORECAST_DATA":
      return { ...state, forecastData: action.payload };
    case "SET_AIR_QUALITY_DATA":
      return { ...state, airQualityData: action.payload };
    case "SET_UV_INDEX":
      return { ...state, uvIndex: action.payload };
    case "SET_WIND_DATA":
      return { ...state, windData: action.payload };
    case "SET_SUNRISE_SUNSET":
      return {
        ...state,
        sunrise: action.payload.sunrise,
        sunset: action.payload.sunset,
      };
    case "SET_HUMIDITY":
      return { ...state, humidity: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "TOGGLE_UNIT":
      return { ...state, isCelsius: action.payload === "celsius" };
    case "TOGGLE_WEATHER_DETAILS":
      return { ...state, isWeatherDetailsVisible: action.payload };
    case "SET_FADE_IN":
      return { ...state, fadeIn: action.payload };
    case "SET_CITY_SEARCHED":
      return { ...state, isCitySearched: action.payload };
    case "SET_LOCATION_WEATHER_FETCHED":
      return { ...state, isLocationWeatherFetched: action.payload };
    case "SET_FAVORITE_CITIES":
      return { ...state, favoriteCities: action.payload };
    default:
      return state;
  }
}
