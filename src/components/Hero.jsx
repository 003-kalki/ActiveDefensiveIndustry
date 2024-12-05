import React from 'react';
import {  Highlight } from "./ui/heroHighlight";
function Hero() {
  return (
    <div
      className="min-h-screen w-full bg-black bg-dot-pattern bg-dots-spacing flex flex-col items-center justify-center text-center px-4"
    >
      {/* Hero section */}
      <div className="h-56 items-center w-full relative flex flex-col justify-center">
      <h1 className="text-white text-3xl md:text-6xl font-bold mb-4">
          <Highlight className="text-white">Active Defensive Industry</Highlight>
        </h1>
        <p className="text-gray-300 text-lg md:text-2xl max-w-4xl mb-6">
          Pioneering state-of-the-art security devices to safeguard what matters most. 
          At Active Defensive Industry, innovation meets reliability to redefine safety.
        </p>
        <button className="mt-4 bg-secondary text-black font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-secondary transition-all">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Hero;