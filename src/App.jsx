
import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"

export default function App() {
  return (
    <BrowserRouter>
   
        <Navbar />
       <Hero/>
   
      <Routes>
      
      </Routes>
      
    </BrowserRouter>
  );
}
