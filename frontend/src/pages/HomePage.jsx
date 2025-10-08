import React from 'react';
import Hero from '../components/Hero';
import Tours from '../components/Tours';
import Features from '../components/Features';
import About from '../components/About';
import Testimonials from '../components/Testimonials';

const HomePage = ({ timeOverride }) => {
  return (
    <div>
      <Hero timeOverride={timeOverride} />
      <Tours />
      <Features />
      <About />
      <Testimonials />
    </div>
  );
};

export default HomePage;