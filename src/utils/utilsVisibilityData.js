import visibilityPoorImg from "../assets/visibility-poor.png";
import visibilityAverageImg from "../assets/visibility-average.png";
import visibilityExcellentImg from "../assets/visibility-excellent.png";

export const convertVisibilityToKm = (visibilityInMeters) => {
  return (visibilityInMeters / 1000).toFixed(1);
};

export const getVisibilityMark = (visibility) => {
  let description = "";
  let mark = "";

  if (visibility <= 2.5) {
    description = "Poor";
    mark = visibilityPoorImg;
  } else if (visibility <= 5.5) {
    description = "Average";
    mark = visibilityAverageImg;
  } else {
    description = "Excellent";
    mark = visibilityExcellentImg;
  }

  return { mark, description };
};
