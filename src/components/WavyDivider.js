import React from "react";

const WavyDivider = () => {
  return (
    <div style={{ overflow: "hidden", lineHeight: 0 }}>
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: "100px", width: "100%" }}
      >
        <path
          d="M0.00,49.98 C150.00,150.00 349.75,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          style={{ stroke: "none", fill: "#ffffff" }} // Adjust the fill color to match your design
        />
      </svg>
    </div>
  );
};

export default WavyDivider;
