import React from "react";

export default function Card({
  WRAPPER: Wrapper = "li",
  ariaText,
  ariaLive,
  ariaRole,
  ariaLabelledBy,
  ariaDescribedBy,
  className,
  children,
}) {
  return (
    <Wrapper
      aria-label={ariaText || undefined}
      aria-live={ariaLive !== "off" ? ariaLive : undefined}
      aria-labelledby={ariaLabelledBy || undefined}
      aria-describedby={ariaDescribedBy || undefined}
      role={ariaRole || undefined}
      className={className || undefined}
    >
      {children}
    </Wrapper>
  );
}
