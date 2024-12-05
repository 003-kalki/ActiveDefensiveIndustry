
import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import About from "./components/About"

export default function App() {
  return (
    <BrowserRouter>
   
        <Navbar />
       <Hero/>
       <About/>
      <Routes>
      
      </Routes>
      
    </BrowserRouter>
  );
}
