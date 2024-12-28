import React from 'react';
import poolImage from "../assets/tesla.jpg";
import homeImage from "../assets/tesla.jpg";
import ranchImage from "../assets/tesla.jpg";

export default function Solutions() {
  return (
    <div className="text-customText min-h-screen w-full bg-black px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Smart Security, Smarter Peace of Mind</h1>
      
      {/* Pool Security Section */}
      <div className="flex flex-col md:flex-row items-center mb-12 bg-cardBackground p-6 rounded-lg shadow-lg">
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-bold mb-4">Pool Security</h2>
          <p className="text-lg">
            Our AI-powered pool monitoring system uses advanced motion sensors and real-time alerts to ensure every splash is safe.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={poolImage} alt="Pool Security Solution" className="rounded-lg shadow-md" />
        </div>
      </div>

      {/* Home Security Section */}
      <div className="flex flex-col md:flex-row-reverse items-center mb-12 bg-cardBackground p-6 rounded-lg shadow-lg">
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-bold mb-4">Home Security</h2>
          <p className="text-lg">
            Our devices provide smart intruder detection, employee theft prevention, and real-time notifications to keep your spaces secure.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={homeImage} alt="Home Security Solution" className="rounded-lg shadow-md" />
        </div>
      </div>

      {/* Ranch Security Section */}
      <div className="flex flex-col md:flex-row items-center bg-cardBackground p-6 rounded-lg shadow-lg">
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-bold mb-4">Ranch Security</h2>
          <p className="text-lg">
            With long-range detection, smart boundary alerts, and integration with drones, our system ensures no intruder goes unnoticed.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={ranchImage} alt="Ranch Security Solution" className="rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
}
