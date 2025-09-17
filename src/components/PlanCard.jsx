import React from "react";
import { FiCheck } from "react-icons/fi";

const PlanCard = ({ plan }) => {
  // detect "most popular" in a case-insensitive way
  const isMostPopular = plan.tag && plan.tag.toLowerCase().includes("most");

  return (
    <div
      className={`rounded-xl overflow-hidden ${
        isMostPopular ? "border border-black" : "border border-gray-300"
      }`}
    >
      {/* Top black bar for Most Popular */}
      {isMostPopular && (
        <div className="w-full bg-black text-white text-xs uppercase text-center py-2">
          {plan.tag}
        </div>
      )}

      {/* Card body */}
      <div className={`px-4 flex flex-col justify-between ${isMostPopular ? "py-4" : "py-12"}`}>
        {/* small pill tag for non-most-popular cards */}
        {!isMostPopular && plan.tag && (
          <div className="bg-black text-white text-xs uppercase px-2 py-1 rounded w-fit mb-3">
            {plan.tag}
          </div>
        )}

        <div>
          <h2 className="text-4xl text-center mb-2">{plan.name}</h2>
          <p className="text-gray-500 text-center text-xs mb-4">
            {plan.description}
          </p>

          <p className="text-5xl text-center font-semibold mt-2">
            {plan.price}
          </p>

          <div className="border-t border-gray-300 mt-12" />

          <p className="text-sm text-center mt-2 mb-2 flex items-center justify-center">
            <span>
              <span className="font-bold">{plan.credits}</span> credits per user
              / year
            </span>
            <span className="ml-2 w-5 h-5 flex items-center justify-center bg-black text-white rounded-full text-xs cursor-pointer">
              i
            </span>
          </p>

          <div className="border-t border-gray-300 mb-4" />

          {/* Primary Button */}
          <button
            className={`w-full py-2 rounded-lg font-medium mb-3 ${
              isMostPopular ? "bg-black text-white hover:bg-gray-800" : plan.buttonColor
            }`}
          >
            {plan.button}
          </button>

          {/* Secondary Button (if present) */}
          {plan.secondaryButton && (
            <button className="w-full py-2 rounded-lg border-2 font-medium hover:bg-gray-50 transition">
              {plan.secondaryButton}
            </button>
          )}

          <ul className="mt-24 space-y-2 text-gray-700 text-sm">
            {plan.features.map((f, i) => (
              <li key={i} className="flex items-start">
                <FiCheck className="mr-2 text-black" /> {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom link */}
        <div className="mt-6">
          <button className="text-sm text-gray-500 hover:underline">
            Show plan comparison
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
