import React from "react";

function Button({
  ariaText,
  ariaExpanded,
  callback,
  className,
  children,
  type = "button",
}) {
  const ariaProps = {};
  // only apply aria-* attributes in cases when they are passed down to <Button> component
  if (ariaText) {
    ariaProps["aria-label"] = ariaText;
  }

  if (ariaExpanded !== undefined) {
    ariaProps["aria-expanded"] = ariaExpanded;
  }

  return (
    <button {...ariaProps} className={className} onClick={callback} type={type}>
      {children}
    </button>
  );
}

export default Button;
