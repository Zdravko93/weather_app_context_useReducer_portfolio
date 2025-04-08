import { convertTemperature } from "./utilsTemperatureData";

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const getNextFiveDays = (currentDay) => {
  const currentIndex = weekdays.indexOf(currentDay);
  return weekdays
    .slice(currentIndex + 1)
    .concat(weekdays.slice(0, currentIndex));
};

export const renderForecastData = (forecastData, isCelsius) => {
  // ensures there's enough forecast data
  if (!forecastData || !forecastData.list || forecastData.list.length < 5) {
    return null;
  }

  const forecast = forecastData.list.slice(0, 5).map((forecastItem, index) => {
    const date = new Date(forecastItem.dt * 1000);
    const dayOfWeek = date.toLocaleString("en-US", { weekday: "short" });

    const unit = isCelsius ? "°C" : "°F";
    const iconCode = forecastItem.weather[0].icon;
    const weatherIconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

    const dayForecastData = forecastData.list.filter((item) => {
      const itemDate = new Date(item.dt * 1000);
      return itemDate.getDate() === date.getDate(); // Filter items for the same day
    });

    const maxTemperature = Math.max(
      ...dayForecastData.map((item) =>
        convertTemperature(item.main.temp_max, isCelsius)
      )
    );
    const minTemperature = Math.min(
      ...dayForecastData.map((item) =>
        convertTemperature(item.main.temp_min, isCelsius)
      )
    );

    return {
      date,
      dayOfWeek,
      unit,
      weatherIconUrl,
      maxTemp: maxTemperature,
      minTemp: minTemperature,
    };
  });

  return { forecast };
};
