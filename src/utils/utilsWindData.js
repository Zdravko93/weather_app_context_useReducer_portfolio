// wind direction images
import northArrow from "../assets/north-arrow.svg";
import northeastArrow from "../assets/northeast-arrow.svg";
import eastArrow from "../assets/east-arrow.svg";
import southeastArrow from "../assets/southeast-arrow.svg";
import southArrow from "../assets/south-arrow.svg";
import southwestArrow from "../assets/southwest-arrow.svg";
import westArrow from "../assets/west-arrow.svg";
import northwestArrow from "../assets/northwest-arrow.png";
// helper object
const windDirectionImages = {
  N: northArrow,
  NE: northeastArrow,
  E: eastArrow,
  SE: southeastArrow,
  S: southArrow,
  SW: southwestArrow,
  W: westArrow,
  NW: northwestArrow,
};

// wind data calculations
export const getWindDirectionImage = (windDirection) => {
  return (
    windDirectionImages[windDirection] || (
      <p style={{ color: "red", fontSize: "0.7rem" }}>"Not available"</p>
    )
  );
};

export const convertWindSpeed = (speedInMps, isMetric) => {
  if (isMetric) {
    return (speedInMps * 3.6).toFixed(2);
  } else {
    return speedInMps.toFixed(2);
  }
};

export const getWindDirection = (deg) => {
  if (deg >= 337.5 || deg < 22.5) return "N";
  if (deg >= 22.5 && deg < 67.5) return "NE";
  if (deg >= 67.5 && deg < 112.5) return "E";
  if (deg >= 112.5 && deg < 157.5) return "SE";
  if (deg >= 157.5 && deg < 202.5) return "S";
  if (deg >= 202.5 && deg < 247.5) return "SW";
  if (deg >= 247.5 && deg < 292.5) return "W";
  if (deg >= 292.5 && deg < 337.5) return "NW";
};
