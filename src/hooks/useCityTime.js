import { useState, useEffect } from "react";
import moment from "moment-timezone";
import { getTimeZoneNameFromOffset } from "../utils/utilsTimeZoneData";

export const useCityTime = (forecastData) => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDayOfWeek, setCurrentDayOfWeek] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateCityTime = () => {
      if (forecastData && forecastData.city && forecastData.list[0]) {
        const cityOffsetInSeconds = forecastData.city.timezone || 0; // timezone offset in seconds
        const cityTimezone = getTimeZoneNameFromOffset(cityOffsetInSeconds);
        const localTime = moment().tz(cityTimezone);

        const hours = localTime.format("HH");
        const minutes = localTime.format("mm");
        const seconds = localTime.format("ss");
        setCurrentTime(`${hours}:${minutes}:${seconds}`);

        const dayOfWeek = localTime.format("dddd");
        setCurrentDayOfWeek(dayOfWeek);

        const date = localTime.format("DD.MM.YYYY");
        setCurrentDate(date);
      }
    };

    updateCityTime();
    const intervalId = setInterval(updateCityTime, 1000);
    return () => clearInterval(intervalId);
  }, [forecastData]);

  return { currentTime, currentDayOfWeek, currentDate };
};
