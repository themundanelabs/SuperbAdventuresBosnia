import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, Clock, TrendingUp } from 'lucide-react';
import { tours } from '../data/mock';
import TourCard from '../components/TourCard';

const ToursPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tours' },
    { id: 'best-selling', label: 'Best Selling' },
    { id: 'winter', label: 'Winter Adventures' },
    { id: 'day-tour', label: 'Day Tours' }
  ];

  const difficulties = ['all', 'Easy', 'Moderate', 'Challenging'];

  const filteredTours = tours.filter(tour => {
    const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tour.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tour.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || tour.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full filter blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Adventure Tours</h1>
            <p className="text-xl text-emerald-100 mb-8">
              Explore Bosnia & Herzegovina with our carefully curated SUV tour packages
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search tours by name or activity..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pl-14 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-orange-400"
              />
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        {/* Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Filter className="text-emerald-700" size={24} />
              <h2 className="text-2xl font-bold text-gray-900">Filter Tours</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Difficulty Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Difficulty Level</label>
                <div className="flex flex-wrap gap-2">
                  {difficulties.map((difficulty) => (
                    <button
                      key={difficulty}
                      onClick={() => setSelectedDifficulty(difficulty)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
                        selectedDifficulty === difficulty
                          ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {difficulty}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 text-lg">
            Found <span className="font-bold text-emerald-700">{filteredTours.length}</span> tour{filteredTours.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour, index) => (
            <TourCard key={tour.id} tour={tour} index={index} />
          ))}
        </div>

        {/* No Results */}
        {filteredTours.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <MapPin className="mx-auto mb-4 text-gray-400" size={64} />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No tours found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ToursPage;