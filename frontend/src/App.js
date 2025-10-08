import React from "react";
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Hero />
        <Tours />
        <Features />
        <About />
        <Testimonials />
        <Gallery />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;