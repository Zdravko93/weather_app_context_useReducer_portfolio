// use input search
export const fetchWeatherByCity = async (city, API_KEY) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );
  if (!response.ok) throw new Error("City not found.");
  return response.json();
};

// use geolocation
export const fetchWeatherByGeolocation = async (
  latitude,
  longitude,
  API_KEY
) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
  );
  if (!response.ok) throw new Error("Unable to fetch weather data.");
  return response.json();
};

// fetch additional data(air quality, UV index...)
export const fetchAdditionalWeatherData = async (lat, lon, API_KEY) => {
  try {
    const [airQualityResponse, forecastResponse, uvIndexResponse] =
      await Promise.all([
        fetch(
          `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        ),
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        ),
        fetch(
          `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        ),
      ]);

    const airQualityData = await airQualityResponse.json();
    const forecastData = await forecastResponse.json();
    const uvIndexData = await uvIndexResponse.json();

    return { airQualityData, forecastData, uvIndexData };
  } catch (error) {
    throw new Error("Unable to fetch additional weather data.");
  }
};
