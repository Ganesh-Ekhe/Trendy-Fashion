import React from 'react';

const Logo = ({ w = "100%", h = "auto", className = "" }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width={w}
        height={h}
        className="fill-current"
      >
        {/* Background Circle with Gradient */}
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: "#ff7e5f", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "#feb47b", stopOpacity: 1 }} />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="40" stroke="#ff6f61" strokeWidth="2" fill="url(#grad1)" />

        {/* Trendy Text */}
        <text
          x="50%"
          y="45%"
          textAnchor="middle"
          dy=".3em"
          fill="#ffffff"
          fontSize="18"
          style={{
            fontFamily: "'Great Vibes', cursive",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          丅ᖇᗴᑎᗪƳ
        </text>
      </svg>

      {/* Fashion Hub Text */}
      <span
        className="text-xl md:text-1xl font-bold mt-[-8px] text-[#ff6f61] tracking-wide drop-shadow-md"
        style={{
          fontFamily: "'Playfair Display', serif",
        }}
      >
        FASHION HUB
      </span>
    </div>
  );
};

export default Logo;
