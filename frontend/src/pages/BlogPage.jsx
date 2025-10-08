import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, User, ArrowRight, Search } from 'lucide-react';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Mock blog data
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Hidden Gems in Bosnia & Herzegovina",
      excerpt: "Discover the most breathtaking off-the-beaten-path destinations that most tourists never see...",
      image: "https://images.unsplash.com/photo-1463693396721-8ca0cfa2b3b5?w=800&h=500&fit=crop",
      author: "Faruk Osmanovic",
      date: "June 15, 2024",
      category: "Travel Tips",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Winter Adventures: Best Time to Visit Bosnia",
      excerpt: "Everything you need to know about experiencing Bosnia's magical winter landscapes...",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=500&fit=crop",
      author: "Marija Kovac",
      date: "May 28, 2024",
      category: "Seasonal Guide",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Essential Packing List for Mountain Adventures",
      excerpt: "Don't leave home without these crucial items for your Balkan mountain expedition...",
      image: "https://images.unsplash.com/photo-1508339917912-c0892cfee9d1?w=800&h=500&fit=crop",
      author: "Darko Petrovic",
      date: "May 10, 2024",
      category: "Travel Tips",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Cultural Etiquette: What to Know Before You Go",
      excerpt: "Understanding local customs and traditions will enrich your Bosnian adventure...",
      image: "https://images.unsplash.com/photo-1639763703351-c27defbb51b1?w=800&h=500&fit=crop",
      author: "Faruk Osmanovic",
      date: "April 22, 2024",
      category: "Culture",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Best Photography Spots in the Balkans",
      excerpt: "Capture Instagram-worthy shots at these stunning locations across Bosnia & Herzegovina...",
      image: "https://images.unsplash.com/photo-1578952258885-6ee0651294e6?w=800&h=500&fit=crop",
      author: "Ana Nikolic",
      date: "April 5, 2024",
      category: "Photography",
      readTime: "8 min read"
    },
    {
      id: 6,
      title: "Local Cuisine: Must-Try Dishes on Your Tour",
      excerpt: "From cevapi to baklava, explore the delicious flavors of Bosnian cuisine...",
      image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=800&h=500&fit=crop",
      author: "Darko Petrovic",
      date: "March 18, 2024",
      category: "Food & Drink",
      readTime: "5 min read"
    }
  ];

  const categories = ['All', 'Travel Tips', 'Seasonal Guide', 'Culture', 'Photography', 'Food & Drink'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
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
            <BookOpen className="mx-auto mb-6 text-orange-400" size={64} />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Adventure Blog</h1>
            <p className="text-xl text-emerald-100 mb-8">
              Travel tips, stories, and insights from our adventures across Bosnia & Herzegovina
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search blog posts..."
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
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-700 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center space-x-2">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <button className="flex items-center space-x-2 text-emerald-700 font-semibold hover:text-emerald-800 transition-colors group">
                    <span>Read More</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <BookOpen className="mx-auto mb-4 text-gray-400" size={64} />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No blog posts found</h3>
            <p className="text-gray-600">Try adjusting your search or category filter</p>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-2xl p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Get the latest travel tips, adventure stories, and special offers delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-orange-400"
            />
            <button className="px-8 py-3 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-105">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;