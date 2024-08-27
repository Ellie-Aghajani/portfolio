import React from "react";

const WavyDivider = () => {
  return (
    <div style={{ overflow: "hidden", lineHeight: 0 }}>
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ height: "150px", width: "100%", backgroundColor: "#fcbf49" }}
      >
        <path
          d="M0,224L48,208C96,192,192,160,288,144C384,128,480,128,576,144C672,160,768,192,864,213.3C960,235,1056,245,1152,234.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          style={{ fill: "#cad2c5" }} // White fill for contrast
        />
      </svg>
    </div>
  );
};

export default WavyDivider;
