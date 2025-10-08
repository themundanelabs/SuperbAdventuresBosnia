import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import TimeDemo from "./components/TimeDemo";

// Pages
import HomePage from "./pages/HomePage";
import ToursPage from "./pages/ToursPage";
import AboutPage from "./pages/AboutPage";
import VideosPage from "./pages/VideosPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import Gallery from "./components/Gallery";

function App() {
  const [demoTime, setDemoTime] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        
        <Routes>
          <Route path="/" element={<HomePage timeOverride={demoTime} />} />
          <Route path="/tours" element={<ToursPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        
        <Footer />
        
        {/* Time Demo Component - Remove in production */}
        <TimeDemo currentTime={demoTime} onTimeChange={setDemoTime} />
      </BrowserRouter>
    </div>
  );
}

export default App;