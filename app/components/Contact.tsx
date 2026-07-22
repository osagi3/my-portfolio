'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';
import Reveal, { staggerContainer, staggerItem } from './Reveal';

// TODO: replace with your real WhatsApp number (country code, no spaces or symbols)
const contactLinks = [
  { icon: Mail, label: 'Email', value: 'you@example.com', href: 'mailto:you@example.com' },
  { icon: Github, label: 'GitHub', value: '@your-username', href: 'https://github.com/your-username' },
  { icon: Linkedin, label: 'LinkedIn', value: '/in/your-username', href: 'https://linkedin.com/in/your-username' },
  { icon: MessageCircle, label: 'WhatsApp', value: '+1 234 567 890', href: 'https://wa.me/1234567890' },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 bg-slate-900/30">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let&apos;s{' '}
            <span className="bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              work together
            </span>
          </h2>
          <p className="text-lg text-slate-400 mb-12 max-w-xl mx-auto leading-relaxed">
            I&apos;m open to new roles and freelance projects. Feel free to reach out — I usually
            reply within a day or two.
          </p>

          <motion.a
            href="mailto:you@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-cyan-600 to-emerald-600 rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-shadow mb-12"
          >
            <Mail className="w-5 h-5" />
            <span>Say Hello</span>
          </motion.a>
        </Reveal>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {contactLinks.map(({ icon: Icon, label, value, href }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-800 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-colors"
            >
              <Icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              <span className="text-xs text-slate-500">{label}</span>
              <span className="text-sm text-slate-300 truncate max-w-full">{value}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
