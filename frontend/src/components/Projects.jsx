import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { portfolioData } from '../mock';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800/40 backdrop-blur-sm border border-rose-500/20 rounded-2xl overflow-hidden hover:border-rose-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/20"
            >
              <div className="grid md:grid-cols-3 gap-6 p-8">
                {/* Left Column - Project Info */}
                <div className="md:col-span-2 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <motion.h3
                        whileHover={{ x: 5 }}
                        className="text-2xl font-bold text-amber-400 mb-2 flex items-center"
                      >
                        {project.title}
                        <ExternalLink className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.h3>
                      <p className="text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-amber-400 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.slice(0, 4).map((highlight, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                          className="text-gray-400 text-sm flex items-start"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 mr-3 flex-shrink-0"></span>
                          {highlight}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-rose-500/10 border border-rose-500/30 rounded-full text-amber-400 text-xs font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Metrics */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-amber-400 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Impact Metrics
                  </h4>
                  <div className="space-y-3">
                    {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.2 + metricIndex * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20 rounded-xl p-4"
                      >
                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                        <p className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-transparent">
                          {value}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
