import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, Linkedin, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { contactInfo, socialLinks, navigationLinks } from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialIcons = {
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    Linkedin
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent">
              SUPERB ADVENTURES
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience the thrill of adventure in Bosnia & Herzegovina with our expert guides and premium SUV tours.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const IconComponent = socialIcons[social.icon];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-emerald-600 transition-all duration-300 hover:scale-110 border border-white/20"
                  >
                    {IconComponent && <IconComponent size={18} />}
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4 text-emerald-400">Quick Links</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-emerald-400 rounded-full group-hover:w-2 transition-all duration-300" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tour Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4 text-emerald-400">Tour Categories</h4>
            <ul className="space-y-3">
              {['Mountain Adventures', 'Winter Tours', 'Day Excursions', 'SUV Safaris', 'Water Sports', 'Cultural Tours'].map((category) => (
                <li key={category}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-emerald-400 rounded-full group-hover:w-2 transition-all duration-300" />
                    <span>{category}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-4 text-emerald-400">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-start space-x-3 text-gray-300 hover:text-emerald-400 transition-colors duration-300 group"
                >
                  <Phone className="flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={18} />
                  <span>{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start space-x-3 text-gray-300 hover:text-emerald-400 transition-colors duration-300 group"
                >
                  <Mail className="flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={18} />
                  <span>{contactInfo.email}</span>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <MapPin className="flex-shrink-0 mt-1" size={18} />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Superb Adventures. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 z-40 border-2 border-white/20"
      >
        <ArrowUp className="text-white" size={24} />
      </button>
    </footer>
  );
};

export default Footer;