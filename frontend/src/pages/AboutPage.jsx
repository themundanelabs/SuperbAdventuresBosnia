import React from 'react';
import { motion } from 'framer-motion';
import { Mountain, Users, Heart, Award, Target, Eye, Shield } from 'lucide-react';
import { aboutContent, features } from '../data/mock';
import * as Icons from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { icon: Users, value: "1000+", label: "Happy Travelers" },
    { icon: Mountain, value: "50+", label: "Destinations" },
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Heart, value: "98%", label: "Satisfaction Rate" }
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To present the beautiful country of Bosnia & Herzegovina to the world through authentic, memorable adventure experiences."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "Creating an international family of adventure enthusiasts who share our passion for exploration and natural beauty."
    },
    {
      icon: Shield,
      title: "Our Promise",
      description: "Small groups, personalized service, and expert guidance to make your dream tours come true."
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full filter blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About Superb Adventures
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-emerald-100 max-w-3xl mx-auto"
          >
            Passionate guides sharing the beauty of Bosnia & Herzegovina through unforgettable SUV adventures
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 text-center border border-emerald-100"
                >
                  <IconComponent className="mx-auto mb-3 text-emerald-700" size={32} />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {aboutContent.description}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {aboutContent.mission}
              </p>
              <p className="text-lg font-medium text-emerald-800">
                {aboutContent.values}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={aboutContent.image}
                alt="About Superb Adventures"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What sets Superb Adventures apart
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = Icons[feature.icon];
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center mb-4">
                    {IconComponent && <IconComponent className="text-white" size={28} />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;