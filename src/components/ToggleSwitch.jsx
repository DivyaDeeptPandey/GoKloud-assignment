import React, { useRef, useEffect, useState } from "react";

const ToggleSwitch = ({ billing, setBilling }) => {
  const annualRef = useRef(null);
  const monthlyRef = useRef(null);
  const [bgStyle, setBgStyle] = useState({ width: 0, left: 0 });

  useEffect(() => {
    if (annualRef.current && monthlyRef.current) {
      const target = billing === "annual" ? annualRef.current : monthlyRef.current;
      setBgStyle({
        width: target.offsetWidth,
        left: target.offsetLeft,
      });
    }
  }, [billing]);

  return (
    <div className="relative flex border-2 rounded-full gap-2 px-1 py-1 overflow-hidden">
      {/* Sliding background */}
      <div
        className="absolute top-1 bottom-1 rounded-full bg-black transition-all duration-300 ease-in-out"
        style={{
          width: bgStyle.width,
          left: bgStyle.left,
        }}
      ></div>

      {/* Buttons */}
      <button
        ref={annualRef}
        className={`relative z-10 px-4 py-1 rounded-full text-sm font-medium transition-colors duration-500 ${
          billing === "annual" ? "text-white" : "text-gray-600"
        }`}
        onClick={() => setBilling("annual")}
      >
        Annual billing{" "}
        <span
          className={`font-semibold transition-colors duration-500 ${
            billing === "annual" ? "text-yellow-400" : "text-yellow-500"
          }`}
        >
          SAVE 20%
        </span>
      </button>
      <button
        ref={monthlyRef}
        className={`relative z-10 px-4 py-1 rounded-full text-sm font-medium transition-colors duration-500 ${
          billing === "monthly" ? "text-white" : "text-gray-600"
        }`}
        onClick={() => setBilling("monthly")}
      >
        Monthly billing
      </button>
    </div>
  );
};

export default ToggleSwitch;
