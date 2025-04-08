import React from "react";

function ArrowLeft({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill=""
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m12.75 9-3 3m0 0 3 3m-3-3h7.5M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z"
      />
    </svg>
  );
}

export default ArrowLeft;
