"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Github, Mail, Download, Linkedin } from "lucide-react";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function Hero({ scrollToSection }: HeroProps) {
  const links = [
    { icon: Github, href: "https://github.com/osagi3", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/wisdom-lucky-1a51923a6?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:Losagie555@gmail.com", label: "Email" },
    { icon: Download, href: "/resume.pdf.docx", label: "Resume" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20"
    >
      {/* Floating elements */}
      <motion.div
        className="absolute top-40 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="relative max-w-6xl mx-auto text-center z-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={item}
          className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-cyan-300">
            Open to frontend roles and product collaborations
          </span>
        </motion.div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <motion.span
            variants={item}
            className="block text-slate-400 text-xl md:text-2xl font-normal mb-4"
          >
            Hi, I&apos;m
          </motion.span>
          <motion.span
            variants={item}
            className="block bg-linear-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent animate-gradient"
          >
            Wisdom Lucky
          </motion.span>
          <motion.span
            variants={item}
            className="block text-2xl md:text-4xl mt-4 bg-linear-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Frontend Developer
          </motion.span>
        </h1>

        <motion.p
          variants={item}
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          I build high-performance, scalable web applications with React,
          Next.js, and TypeScript, focusing on intuitive user interfaces, API
          integrations, and accessible product experiences that are ready for
          production.
        </motion.p>

        <motion.div
          variants={item}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto text-left"
        >
          {[
            { value: "3+", label: "Years building frontend products" },
            {
              value: "React",
              label: "Modern UI architecture and reusable components",
            },
            {
              value: "Real-time",
              label: "SSE, SignalR, dashboards, and live data flows",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 px-5 py-4 backdrop-blur-sm"
            >
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection("projects")}
            className="group px-8 py-4 bg-linear-to-r from-cyan-600 to-emerald-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-shadow flex items-center space-x-2"
          >
            <span>View My Work</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection("contact")}
            className="group px-8 py-4 border-2 border-cyan-500/50 rounded-xl font-semibold hover:bg-cyan-500/10 hover:border-cyan-500 transition-colors flex items-center space-x-2"
          >
            <span>Contact Me</span>
            <Mail className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-4"
        >
          {links.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-500 hover:bg-cyan-500/10 transition-colors"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { delay: 1, duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cyan-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
