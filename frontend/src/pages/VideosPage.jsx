import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Youtube, Calendar } from 'lucide-react';

const VideosPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Mock video data
  const videos = [
    {
      id: 1,
      title: "Mountain Peak Adventure - Summer 2024",
      thumbnail: "https://images.unsplash.com/photo-1508339917912-c0892cfee9d1?w=800&h=450&fit=crop",
      videoId: "dQw4w9WgXcQ",
      duration: "8:45",
      date: "June 2024",
      views: "2.5K"
    },
    {
      id: 2,
      title: "Winter Wonderland Trek Through Bosnia",
      thumbnail: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=450&fit=crop",
      videoId: "dQw4w9WgXcQ",
      duration: "12:30",
      date: "January 2024",
      views: "3.8K"
    },
    {
      id: 3,
      title: "SUV Safari Adventure - Behind the Scenes",
      thumbnail: "https://images.unsplash.com/photo-1565787731382-4f355b73e7dc?w=800&h=450&fit=crop",
      videoId: "dQw4w9WgXcQ",
      duration: "15:20",
      date: "March 2024",
      views: "5.2K"
    },
    {
      id: 4,
      title: "White Water Rafting Experience",
      thumbnail: "https://images.unsplash.com/photo-1627241129356-137242cf14f0?w=800&h=450&fit=crop",
      videoId: "dQw4w9WgXcQ",
      duration: "10:15",
      date: "May 2024",
      views: "4.1K"
    },
    {
      id: 5,
      title: "Paragliding Over Mountains",
      thumbnail: "https://images.unsplash.com/photo-1456139333202-745e9029f0ef?w=800&h=450&fit=crop",
      videoId: "dQw4w9WgXcQ",
      duration: "6:30",
      date: "April 2024",
      views: "6.7K"
    },
    {
      id: 6,
      title: "Forest Trail Hiking Guide",
      thumbnail: "https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?w=800&h=450&fit=crop",
      videoId: "dQw4w9WgXcQ",
      duration: "9:45",
      date: "July 2024",
      views: "3.3K"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full filter blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Youtube className="mx-auto mb-6 text-orange-400" size={64} />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Adventure Videos</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Experience our tours through the eyes of our adventurers
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        {/* Featured Video */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="aspect-video bg-gray-900">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedVideo.title}</h2>
              <div className="flex items-center space-x-4 text-gray-600">
                <span className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>{selectedVideo.date}</span>
                </span>
                <span>•</span>
                <span>{selectedVideo.views} views</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedVideo(video)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                    <Play className="text-white ml-1" size={28} fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-white text-sm">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-700 transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{video.date}</span>
                  <span>{video.views} views</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* YouTube Channel CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-2xl p-12 text-white">
            <Youtube className="mx-auto mb-4 text-orange-400" size={48} />
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Channel</h2>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Don't miss out on our latest adventure videos, travel tips, and behind-the-scenes content
            </p>
            <a
              href="https://www.youtube.com/channel/UC3eo8kmM55pwfQssPLhIlPQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-orange-500 text-white font-bold rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-105"
            >
              Visit Our YouTube Channel
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VideosPage;