"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Design / Development",
  },
  {
    title: "Corporate Website",
    category: "Brand / UI Experience",
  },
  {
    title: "SaaS Dashboard",
    category: "Product / UX System",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 22,
    },
  },
};

export default function PortfolioPreview() {
  return (
    <section className="relative bg-black text-zinc-50 px-6 md:px-12 py-24 overflow-hidden">
      
      {/* 🎞 Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "url('/noise.png')",
          backgroundRepeat: "repeat",
        }}
      />

      {/* 🔳 Header */}
      <div className="relative z-10 mb-16">
        <div className="flex items-center gap-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tighter">
            Our Recent Work
          </h2>
          <div className="h-px flex-1 bg-zinc-800" />
        </div>

        <p className="mt-4 text-zinc-500 max-w-2xl leading-relaxed">
          Explore a selection of high-performance digital experiences we’ve
          designed and engineered for ambitious, growing businesses. Each
          project reflects our commitment to precision, clarity, and measurable
          impact.
        </p>
      </div>

      {/* 🧱 Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            className="group relative bg-black border border-zinc-800 p-8 rounded-none hover:bg-zinc-900 transition-colors duration-150"
          >
            {/* 🔢 Index */}
            <div className="font-mono text-zinc-500 text-xs mb-6">
              // {String(index + 1).padStart(2, "0")}
            </div>

            {/* 🖼 Preview Placeholder */}
            <div className="mb-6 border border-zinc-800 aspect-4/3 flex items-center justify-center">
              <span className="text-zinc-700 text-xs uppercase tracking-widest">
                Project Preview
              </span>
            </div>

            {/* 🧾 Title */}
            <h3 className="text-lg font-semibold uppercase tracking-tight">
              {project.title}
            </h3>

            {/* ✨ Category */}
            <p className="mt-2 text-xs text-zinc-500 uppercase tracking-wide">
              {project.category}
            </p>

            {/* ➜ View Case Study */}
            <div className="mt-6 flex items-center text-xs uppercase tracking-wide">
              <span className="text-zinc-400 group-hover:text-zinc-50 transition-colors">
                View Case Study
              </span>

              <motion.span
                className="ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <ArrowUpRight size={14} />
              </motion.span>
            </div>

            {/* ⚡ Border Glow */}
            <div className="absolute inset-0 border border-transparent group-hover:border-zinc-50 transition-all duration-150 pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>

      {/* 👉 CTA */}
      <div className="relative z-10 mt-16">
        <button className="rounded-none border border-zinc-800 px-10 py-4 text-sm uppercase tracking-wide hover:bg-zinc-50 hover:text-black transition-all duration-150">
          View Full Portfolio
        </button>
      </div>
    </section>
  );
}
