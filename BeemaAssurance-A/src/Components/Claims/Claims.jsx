
import React from "react";
import clamis from "../../assets/clamis.png";
import Button from "../Button/Button";

function Claims({ onReachOutClick }) {
  return (
    <div className="flex flex-col items-center text-center px-4 py-10 bg-white">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-10">
        Filing a claim is now made easy
      </h2>

      {/* Image */}
      <img
        src={clamis}
        alt="Claim Process"
        className="w-full max-w-xs sm:max-w-sm md:max-w-md mb-6"
      />

      {/* Button */}
      <Button
        label="Reach-out to us"
        bgColor="bg-blue-500"
        textColor="text-white"
        width="w-60"
        height="h-12"
        borderRadius="rounded-lg"
        onClick={onReachOutClick}  // Use the passed prop here
      />
    </div>
  );
}

export default Claims;

