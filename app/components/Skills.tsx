'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Reveal, { staggerContainer, staggerItem } from './Reveal';

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    category: 'Architecture',
    skills: ['Reusable Components', 'Responsive UI', 'Accessibility', 'API Integration', 'State Management'],
  },
  {
    category: 'Data and Realtime',
    skills: ['Server-Sent Events (SSE)', 'SignalR', 'Dashboards', 'Data Visualization', 'Large Dataset Handling'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'Agile Collaboration', 'Performance Optimization'],
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
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            My day-to-day stack focuses on modern frontend engineering, scalable UI systems,
            and real-time product experiences.
          </p>
        </Reveal>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6"
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
