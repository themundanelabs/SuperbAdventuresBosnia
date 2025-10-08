import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mountain, Sun, Moon, Cloud, Sunrise } from 'lucide-react';
import Scene3D from './Scene3D';
import { heroContent } from '../data/mock';

// Get time of day
function getTimeOfDay() {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 18) return 'noon';
  if (hour >= 18 && hour < 21) return 'evening';
  return 'night';
}

const Hero = () => {
  const [timeOfDay, setTimeOfDay] = useState(getTimeOfDay());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeOfDay(getTimeOfDay());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTours = () => {
    const toursSection = document.getElementById('tours');
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Theme-based overlays and icons
  const timeThemes = {
    morning: {
      gradient: 'from-blue-200/20 via-orange-200/10 to-transparent',
      icon: Sunrise,
      text: 'Good Morning! Start Your Adventure'
    },
    noon: {
      gradient: 'from-blue-100/10 via-transparent to-transparent',
      icon: Sun,
      text: 'Beautiful Day for Adventure'
    },
    evening: {
      gradient: 'from-orange-300/20 via-purple-200/10 to-transparent',
      icon: Cloud,
      text: 'Evening Adventures Await'
    },
    night: {
      gradient: 'from-indigo-950/40 via-indigo-900/30 to-transparent',
      icon: Moon,
      text: 'Dream of Tomorrow\'s Adventure'
    }
  };

  const currentTheme = timeThemes[timeOfDay];
  const TimeIcon = currentTheme.icon;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 3D Background */}
      <Scene3D />
      
      {/* Time-based overlay for better text readability */}
      <div className={`absolute inset-0 bg-gradient-to-b ${currentTheme.gradient} z-10`} />
      <div className="absolute inset-0 bg-black/20 z-10" />
      
      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 space-y-4"
            >
              {/* Time of day indicator */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full">
                <TimeIcon className="text-orange-400" size={20} />
                <span className="text-white font-medium text-sm">{currentTheme.text}</span>
              </div>
              
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full">
                <Mountain className="text-orange-400" size={24} />
                <span className="text-white font-medium">10+ Years of Adventure Excellence</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              {heroContent.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 mb-4"
            >
              {heroContent.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
            >
              {heroContent.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                onClick={scrollToTours}
                className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
              >
                <span>{heroContent.cta}</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              
              <button
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Learn More
              </button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
              >
                <div className="w-1 h-3 bg-white/70 rounded-full" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;