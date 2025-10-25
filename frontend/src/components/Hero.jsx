import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Database, Container, Network, Shield, Code, Terminal } from 'lucide-react';
import { portfolioData } from '../mock';

const Hero = () => {
  const { personal, stats } = portfolioData;

  const floatingIcons = [
    { Icon: Cloud, color: 'text-amber-400', delay: 0, x: -20, y: -20 },
    { Icon: Server, color: 'text-rose-400', delay: 0.2, x: 20, y: -30 },
    { Icon: Database, color: 'text-lime-400', delay: 0.4, x: -30, y: 20 },
    { Icon: Container, color: 'text-pink-400', delay: 0.6, x: 30, y: 10 },
    { Icon: Network, color: 'text-amber-500', delay: 0.8, x: -10, y: -40 },
    { Icon: Shield, color: 'text-rose-500', delay: 1, x: 10, y: 30 },
    { Icon: Code, color: 'text-lime-500', delay: 1.2, x: -40, y: 10 },
    { Icon: Terminal, color: 'text-pink-500', delay: 1.4, x: 40, y: -10 }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-lime-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating 3D Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map(({ Icon, color, delay, x, y }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
              x: [0, x, 0],
              y: [0, y, 0]
            }}
            transition={{
              duration: 4 + index * 0.5,
              repeat: Infinity,
              delay: delay,
              ease: 'easeInOut'
            }}
            className={`absolute ${color}`}
            style={{
              left: `${10 + index * 10}%`,
              top: `${15 + (index % 3) * 25}%`
            }}
          >
            <Icon size={40} strokeWidth={1.5} />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-amber-400 via-rose-500 to-pink-500 bg-clip-text text-transparent">
              {personal.name}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-6"
          >
            <h2 className="text-2xl md:text-4xl text-gray-300 font-semibold mb-4">
              {personal.title}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {personal.tagline}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-amber-500 via-rose-500 to-pink-500 text-white rounded-lg font-semibold shadow-lg shadow-rose-500/50 hover:shadow-rose-500/80 transition-all duration-300"
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gray-800/50 border border-amber-500/30 text-amber-400 rounded-lg font-semibold hover:bg-amber-500/10 transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-800/30 backdrop-blur-sm border border-amber-500/20 rounded-xl p-6 hover:border-rose-500/40 transition-all duration-300"
              >
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 via-rose-500 to-pink-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
