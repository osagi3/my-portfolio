'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Reveal, { staggerContainer, staggerItem } from './Reveal';

// TODO: edit this list to match your actual stack
const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Redux'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'Figma', 'Vercel', 'Docker'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Tools I{' '}
            <span className="bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              work with
            </span>
          </h2>
        </Reveal>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillGroups.map(({ category, skills }) => (
            <motion.div
              key={category}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 backdrop-blur-sm transition-colors"
            >
              <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wide mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-lg bg-slate-800 text-slate-300 border border-slate-700 hover:border-cyan-500/50 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
