export const getUVDescription = (uvIndex) => {
  let text = "";
  let textColor = "";

  if (uvIndex >= 11) {
    text = "Extreme - Avoid outdoor activities!";
    textColor = "uv-extreme";
  } else if (uvIndex >= 8) {
    text = "Very High - Take precautions!";
    textColor = "uv-very-high";
  } else if (uvIndex >= 6) {
    text = "High - Protection needed!";
    textColor = "uv-high";
  } else if (uvIndex >= 3) {
    text = "Moderate - Stay safe!";
    textColor = "uv-moderate";
  } else {
    text = "Low - Safe to go outside!";
    textColor = "uv-low";
  }

  return { text, textColor };
};
