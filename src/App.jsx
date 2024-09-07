import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Marquee from "./components/Marquee";
import Navigate from "./components/Navigate";
import Hero from "./components/Hero";
import Characters from "./components/Characters";
import Events from "./components/Events";
import Features from "./components/Features";

const App = () => {
  return (
    <Router>
      <div className="w-screen h-screen bg-black overflow-hidden">
        <Navbar />
        <Navigate />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/char" element={<Characters />} />
          <Route path="/event" element={<Events />} />
          <Route path="/feature" element={<Features />} />
        </Routes>
        <Marquee />
      </div>
    </Router>
  );
};

export default App;
