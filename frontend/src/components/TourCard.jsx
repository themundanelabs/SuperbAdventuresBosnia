import React from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, ArrowRight } from 'lucide-react';

const TourCard = ({ tour, index }) => {
  const difficultyColors = {
    'Easy': 'text-emerald-600 bg-emerald-50',
    'Moderate': 'text-amber-600 bg-amber-50',
    'Challenging': 'text-red-600 bg-red-50'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <span className="text-2xl font-bold text-emerald-700">{tour.price}</span>
        </div>

        {/* Difficulty Badge */}
        <div className={`absolute top-4 left-4 ${difficultyColors[tour.difficulty]} px-3 py-1 rounded-full text-sm font-semibold`}>
          {tour.difficulty}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
          {tour.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {tour.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-gray-500">
            <Clock size={18} />
            <span className="text-sm font-medium">{tour.duration}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-500">
            <TrendingUp size={18} />
            <span className="text-sm font-medium">{tour.difficulty}</span>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold py-3 rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg">
          <span>Book Now</span>
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
        </button>
      </div>
    </motion.div>
  );
};

export default TourCard;