import humidityNormalImg from "../assets/humidity-normal.png";
import humidityAverageImg from "../assets/humidity-average.png";
import humidityHighImg from "../assets/humidity-high.png";

export const getHumidityMark = (humidityPercentage) => {
  let description = "";

  if (humidityPercentage <= 25) {
    description = "Normal";
    return { mark: humidityNormalImg, description };
  } else if (humidityPercentage <= 56) {
    description = "Average";
    return { mark: humidityAverageImg, description };
  } else {
    description = "High";
    return { mark: humidityHighImg, description };
  }
};
