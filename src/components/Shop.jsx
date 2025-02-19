"use client";

import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";
import indoorSec from "../assets/indoorSec.jpg";
import Image4 from "../assets/Image4.jpg";
import Image3 from "../assets/Image3.jpg";
import aisec from "../assets/aisec.jpeg"
const AppleCardsCarouselDemo = () => {
  return (
    <div className="w-full h-full py-20">
    <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-black dark:text-gray-600 font-sans">
      Product Lineup
    </h2>
    <Carousel items={data.map((card, index) => (
      <Card key={card.src} card={card} index={index} layout />
    ))} />
  </div>
  
  
  );
};

const DummyContent = () => (
  <>
    {Array.from({ length: 3 }).map((_, index) => (
      <div key={index} className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">
            The first rule of Apple club is that you boast about Apple club.
          </span>{" "}
          Keep a journal, quickly jot down a grocery list, and take amazing class notes. Want to convert those notes to text? No problem.
          Langotiya jeetu ka mara hua yaar is ready to capture every thought.
        </p>
        <img
          src="https://assets.aceternity.com/macbook.png"
          alt="Macbook mockup from Aceternity UI"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      </div>
    ))}
  </>
);
const data = [
  {
    category: "Indoor Security",
    title: "Smart Home Safety",
    src: indoorSec,  
    content: <DummyContent />,
  },
  {
    category: "Outdoor Security",
    title: "Secure Your Perimeter",
    src: "https://images.pexels.com/photos/3931675/pexels-photo-3931675.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Ranch Security",
    title: "Wide-Area Protection",
    src: Image4,  
    content: <DummyContent />,
  },
  {
    category: "Best Selling",
    title: "Top-Rated Security",
    src: Image3,
    content: <DummyContent />,
  },
  {
    category: "Newly Launched",
    title: "Next-Gen AI Security",
    src: aisec,  
    content: <DummyContent />,
  },
];





export default AppleCardsCarouselDemo;