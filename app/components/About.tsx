"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Zap } from "lucide-react";
import Reveal, { staggerContainer, staggerItem } from "./Reveal";

const highlights = [
  {
    icon: Code2,
    title: "Scalable Frontends",
    description:
      "I build structured component systems and production-ready interfaces that can grow with the product.",
  },
  {
    icon: Palette,
    title: "Intentional UX",
    description:
      "I care about smooth interactions, responsive layouts, and accessible experiences that feel polished.",
  },
  {
    icon: Zap,
    title: "Product Performance",
    description:
      "From API integrations to large datasets and real-time updates, I optimize for speed and reliability.",
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
            A little about{" "}
            <span className="bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              who I am
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I&apos;m Wisdom Kelvin Lucky, a results-driven frontend developer
            with over three years of experience building web applications that
            are scalable, intuitive, and accessible. I enjoy turning product
            ideas into interfaces that feel clear for users and dependable for
            teams shipping them.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-6 mb-10">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm">
            <p className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-4">
              Professional Summary
            </p>
            <p className="text-slate-300 leading-8">
              My work centers on React, Next.js, modern JavaScript, and
              TypeScript. I build fast, accessible product experiences,
              integrate APIs cleanly, and collaborate well inside agile teams to
              deliver production-ready software. Most recently, I led frontend
              implementation for a global healthcare platform, owning the build
              from component architecture through deployment.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm">
            <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wide mb-4">
              Education
            </p>
            <h3 className="text-xl font-semibold text-white mb-2">
              National Open University of Nigeria
            </h3>
            <p className="text-slate-300">B.Sc. Film Production</p>
            <p className="text-slate-500 mt-2">
              Lagos, Nigeria • September 2024
            </p>
          </div>
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
