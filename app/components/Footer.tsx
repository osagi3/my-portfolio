'use client';

import React from 'react';
import Reveal from './Reveal';

export default function Footer() {
  return (
    <footer className="relative py-8 px-6 border-t border-slate-800">
      <Reveal y={12} className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Wisdom Lucky. All rights reserved.
        </p>
        <p className="text-sm text-slate-600">
          Built with Next.js, Tailwind CSS, and Framer Motion
        </p>
      </Reveal>
    </footer>
  );
}
