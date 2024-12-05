import React from 'react';
import tesla from "../assets/tesla.jpg";

export default function About() {
  return (
    <div className="text-white min-h-screen w-full bg-black bg-dot-pattern bg-dots-spacing text-center  flex">
      
      <div className="flex-1 flex-col  ">
        <h1 className="flex">Protecting What Matters Most</h1>
        <p1 className="flex">At [Your Business Name], safety isn't just a priority—it's a commitment. Our innovative pool monitoring devices are designed to bring you peace of mind, ensuring that your loved ones are always secure.</p1>
      </div>
      <div className="flex-1 text-left flex justify-end px-4">
        <img className="h-52" src={tesla} alt="Tesla" />
      </div>
    </div>
  );
}
