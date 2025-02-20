import React from 'react';
import Image4 from "../../src/assets/Image4.jpg"; // Absolute path




export default function About() {
  return (
    <div className="text-white min-h-screen w-full bg-black flex flex-col md:flex-row items-center md:items-start px-6 md:px-12 ">
      {/* Text Section */}
      <div className="flex-1 md:pr-8 space-y-6 mt-14">
        <h1 className="text-4xl font-bold mb-4">
          Unseen Threats, Smarter Solutions
        </h1>
        <p className="text-lg">
          More than <span className="font-semibold text-red-500">4,000 drownings</span> happen every year. Most could have been prevented with smarter real-time monitoring.
        </p>
        <p className="text-lg">
          Over <span className="font-semibold text-yellow-500">35% of business losses</span> come from internal theft. Why wait until after the loss to act?
        </p>
        <p className="text-lg">
          Ranchers lose <span className="font-semibold text-green-500">millions annually</span> due to livestock theft. Protecting a ranch requires smarter perimeter monitoring, not just cameras.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center mt-8 md:mt-14 mt-10">
        <img
          className="rounded-lg shadow-lg max-w-full md:max-w-[80%] lg:max-w-[60%] h-auto"
          src={Image4}
          alt="Security Device"
        />
      </div>
    </div>
  );
}
