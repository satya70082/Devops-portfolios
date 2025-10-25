import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Activity, GitBranch, Network } from 'lucide-react';
import { portfolioData } from '../mock';

const Skills = () => {
  const { skills } = portfolioData;

  const categoryIcons = {
    'Cloud & Automation': Cloud,
    'DevOps & CI/CD': Server,
    'Monitoring & Management': Activity,
    'Version Control & OS': GitBranch,
    'Networking & Containers': Network
  };

  return (
    <section id="skills" className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
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
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => {
            const Icon = categoryIcons[category] || Cloud;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-800/40 backdrop-blur-sm border border-rose-500/20 rounded-2xl p-6 hover:border-rose-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/20"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-bold text-amber-400">{category}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {skillList.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + index * 0.05 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                        <span className="text-amber-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.05 + 0.2 }}
                          className="h-full bg-gradient-to-r from-amber-400 to-pink-500 rounded-full"
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
