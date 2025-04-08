import React from "react";

function Input({ ...props }) {
  const ariaProps = {};
  // only add aria-label if ariaText is provided
  if (props.ariaText) {
    ariaProps["aria-label"] = props.ariaText;
  }

  // Only add aria-describedby if ariaDescribedBy is provided
  if (props.ariaDescribedBy) {
    ariaProps["aria-describedby"] = props.ariaDescribedBy;
  }

  return (
    <input
      className={props.className}
      onClick={props.onFocus}
      {...ariaProps}
      {...props}
    />
  );
}

export default Input;
