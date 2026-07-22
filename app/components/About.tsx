'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Zap } from 'lucide-react';
import Reveal, { staggerContainer, staggerItem } from './Reveal';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'I write maintainable, well-structured code that scales with the product.',
  },
  {
    icon: Palette,
    title: 'Design Sense',
    description: 'I care about the details — spacing, motion, and interaction that feel right.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Fast load times and smooth interactions are non-negotiable in what I build.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            A little about{' '}
            <span className="bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              who I am
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {/* TODO: replace with your real bio */}
            I&apos;m a frontend developer who enjoys turning ideas into interfaces people
            actually like using. I&apos;ve worked across web and mobile projects, and I like
            being close to both the design and the code that brings it to life.
          </p>
        </Reveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {highlights.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 backdrop-blur-sm transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-slate-400 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
