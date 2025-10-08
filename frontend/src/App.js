import React, { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Tours from "./components/Tours";
import Features from "./components/Features";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import TimeDemo from "./components/TimeDemo";

function App() {
  const [demoTime, setDemoTime] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Hero timeOverride={demoTime} />
        <Tours />
        <Features />
        <About />
        <Testimonials />
        <Gallery />
        <Footer />
        
        {/* Time Demo Component - Remove in production */}
        <TimeDemo currentTime={demoTime} onTimeChange={setDemoTime} />
      </BrowserRouter>
    </div>
  );
}

export default App;