import React from 'react';
import { World } from "./ui/Globe";
import { Typewriter } from 'react-simple-typewriter';

function Hero() {
  const globeConfig = {
    globeColor: "#1d072e",
    emissive: "#000000",
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    ambientLight: 0xffffff,
    directionalLeftLight: 0xffffff,
    directionalTopLight: 0xffffff,
    pointLight: 0xffffff,
  };

  const globeData = [
    {
      startLat: 37.7749,
      startLng: -122.4194,
      endLat: 51.5074,
      endLng: -0.1278,
      arcAlt: 0.3,
      order: 1,
      color: "#ff0000",
    },
    {
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 35.6895,
      endLng: 139.6917,
      arcAlt: 0.4,
      order: 2,
      color: "#00ff00",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black bg-dot-pattern bg-dots-spacing flex flex-col items-center justify-center text-center px-4">
      {/* Hero section */}
      <div className="h-56 items-center w-full relative flex flex-col justify-center">
        <h1 className="text-white text-5xl font-bold mb-4 lg:text-5xl">Active Defense Industries</h1>
        <p className="text-gray-400 text-2xl font-bold mb-4">
          One stop security solution for  
        </p>
        <div className="md:text-2xl pl-2 sm:text-2xl text-xl font-bold sm:pl-3 lg:text-3xl text-gray-400">
          <span>
            <Typewriter
              words={['Pool Safety', 'Office Security', 'Outdoor Monitoring']}
              loop={true}
              typeSpeed={120}
              deleteSpeed={140}
              delaySpeed={1000}
              cursor
              cursorStyle="_"
            />
          </span>
        </div>
      </div>
      <div className="w-full h-96">
        <World globeConfig={globeConfig} data={globeData} />
      </div>
    </div>
  );
}

export default Hero;
