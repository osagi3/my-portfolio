"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Reveal, { staggerContainer, staggerItem } from "./Reveal";

// ---------------------------------------------------------------------------
// Add your projects here. Each entry renders as one card below.
// `image` is optional — leave it out and a gradient placeholder is used instead.
// ---------------------------------------------------------------------------
interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
  note?: string;
}

const projects: Project[] = [
  {
    title: "GHRI Healthcare Platform",
    description:
      "Built the complete frontend UI and core functionality for a global healthcare platform focused on improving healthcare access, consultations, and community engagement.",
    tags: ["React", "Next.js", "Accessible UI", "Component Architecture"],
    liveUrl: "https://example.com/ghri-demo",
    repoUrl: "https://github.com/osagi3/ghri-placeholder",
  },
  {
    title: "AlphaStock Real-Time Investment Community",
    description:
      "Developed a live investment community experience with real-time stock updates, multi-community chat, and monetization-focused flows for subscription products.",
    tags: ["React", "SSE", "SignalR", "Realtime UX"],
    liveUrl: "https://example.com/alphastock-demo",
    repoUrl: "https://github.com/osagi3/alphastock-placeholder",
  },
  {
    title: "BioNafitha Healthcare E-Commerce Platform",
    description:
      "Engineered an admin dashboard with inventory visibility, sales analytics, reusable data modules, and efficient state handling for high-volume product management.",
    tags: ["Dashboard UI", "Data Visualization", "Payments", "Performance"],
    liveUrl: "https://example.com/bionafitha-demo",
    repoUrl: "https://github.com/osagi3/bionafitha-placeholder",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Built a fully responsive e-commerce web application using React, Next.js, JavaScript, and Tailwind CSS.",
    tags: ["Products data", "Payments", "Performance"],
    liveUrl: "https://mystore-b2d5.vercel.app",
    repoUrl: "https://github.com/osagi3/Mystore.git",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <span className="text-sm font-semibold text-cyan-400 uppercase tracking-widest">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Things I&apos;ve{" "}
            <span className="bg-linear-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              built
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A selection of product work spanning healthcare, fintech, and
            commerce, with a focus on real-world UX, frontend architecture, and
            performance.
          </p>
        </Reveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              className="group flex flex-col rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-950/40 backdrop-blur-sm overflow-hidden transition-all"
            >
              {/* Preview */}
              <div className="relative h-44 overflow-hidden">
                {project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-cyan-600/30 via-slate-900 to-emerald-600/30 flex items-end justify-start p-6">
                    <span className="text-slate-200 text-sm font-medium rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 backdrop-blur-sm">
                      Case Study
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {project.note && (
                  <p className="mb-4 rounded-xl border border-amber-500/20 bg-amber-500/5 px-3 py-2 text-xs leading-relaxed text-amber-200">
                    {project.note}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-md bg-slate-800 text-cyan-300 border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
