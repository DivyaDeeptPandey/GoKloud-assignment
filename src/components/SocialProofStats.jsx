import React from "react";
import { FaStar } from "react-icons/fa";

const AwardsSection = () => {
  return (
    <div className="px-4">
        <div className="bg-[#F7F5F2] rounded-lg shadow p-8 md:px-12 flex flex-col md:flex-row items-center justify-between">
          {/* Left side: headline + stars */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-semibold mb-4">
              The most loved sales <br/> platform on the planet
            </h2>

            {/* Stars */}
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-purple-500 w-6 h-6" />
              ))}
            </div>
            <p className="text-gray-600 text-sm">
              4.7/5 based on 9,015 reviews | GDPR Compliant
            </p>
          </div>

          {/* Right side: badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <img
              src="/images/badge1.svg"
              alt="Top 100 Highest Satisfaction Products"
              className="h-28"
            />
            <img
              src="/images/badge1.svg"
              alt="Top 50 Sales Products"
              className="h-28"
            />
            <img
              src="/images/badge1.svg"
              alt="Top 100 Best Software Products"
              className="h-28"
            />
            <img
              src="/images/badge1.svg"
              alt="Top 50 Small Business Products"
              className="h-28"
            />
          </div>
      </div>
    </div>
  );
};

export default AwardsSection;
