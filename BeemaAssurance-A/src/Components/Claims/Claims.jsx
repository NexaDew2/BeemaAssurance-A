import React from "react";
import clamis from '../../assets/clamis.png';
import Button from "../Button/Button";

function Claims() {
    return (
        <div className="flex flex-col items-center text-center p-10 bg-white">
            {/* Heading */}
            <h2 className="text-6xl font-bold mb-10">
                Filing a claim is now made easy
            </h2>

            {/* Image */}
            <img
                src={clamis}
                alt="Claim Process"
                className="w-full max-w-md mb-6"
            />

            {/* Button */}
            <Button
                label="Reach-out to us"
                bgColor="bg-blue-500"
                textColor="text-white"
                width="w-60"
                height="h-12"
                borderRadius="rounded-lg"
                onClick={() => alert("Redirecting to support...")}
            />
        </div>
    );
}

export default Claims;


