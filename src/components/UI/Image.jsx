import React from "react";

function Image({ imgSrc, altText, className = "", ariaDescribedBy }) {
  return (
    <img
      src={imgSrc}
      alt={altText}
      className={className || undefined}
      aria-describedby={ariaDescribedBy || undefined}
    />
  );
}

export default Image;
