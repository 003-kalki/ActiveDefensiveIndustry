import React from "react";

export function GridSmallBg() {
  return (
    <div
      className="h-[50rem] w-full dark:bg-black bg-black bg-grid-lines bg-line-grid relative flex items-center justify-center">
      {/* Radial gradient for faded look */}
      <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p
        className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p>
    </div>
  );
}
