
import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import About from "./components/About"
import Solution from "./components/Solution"
import Footer from "./components/Footer"
import Shop from "./components/Shop"
export default function App() {
  return (
    <BrowserRouter>
   
        <Navbar />
       <Hero/>
       <About/>
       <Solution/>
       <Shop/>
       <Footer/>
      <Routes>
      
      </Routes>
      
    </BrowserRouter>
  );
}
