export const getAQIDescription = (aqi) => {
  switch (aqi) {
    case 1:
      return "Good - Air quality is considered satisfactory, and air pollution poses little or no risk.";
    case 2:
      return "Fair - Air quality is acceptable; however, there may be some health concerns for very sensitive individuals.";
    case 3:
      return "Moderate - Air quality is acceptable; however, some pollutants may have a moderate impact on health.";
    case 4:
      return "Poor - Air quality may affect health, especially for vulnerable individuals such as children and the elderly.";
    case 5:
      return "Very Poor - Air quality is hazardous, and health warnings are issued for the entire population.";
    default:
      return "No data available for air quality.";
  }
};

export const getAQIClasses = (aqi) => {
  switch (aqi) {
    case 1:
      return "top";
    case 2:
      return "fair";
    case 3:
      return "moderate";
    case 4:
      return "poor";
    case 5:
      return "very-poor";
  }
};
