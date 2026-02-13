"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Website Design",
    description:
      "Beautiful, modern, and user-focused interfaces engineered for clarity and brand impact.",
  },
  {
    title: "Website Development",
    description:
      "Fast, scalable, and SEO-optimized websites built using cutting-edge technologies.",
  },
  {
    title: "Hosting & Deployment",
    description:
      "Secure, stable, and performance-tuned infrastructure for reliability and speed.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Continuous updates, improvements, monitoring, and technical care.",
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

const cardVariants = {
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

export default function ServicesSnapshot() {
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
      <div className="relative z-10 mb-14">
        <div className="flex items-center gap-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tighter">
            What We Do
          </h2>
          <div className="h-px flex-1 bg-zinc-800" />
        </div>

        <p className="mt-4 text-zinc-500 max-w-xl">
          A sharp snapshot of our core capabilities designed to build,
          launch, and scale your digital presence.
        </p>
      </div>

      {/* 🧱 Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-800"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={cardVariants}
            className="group relative bg-black border border-zinc-800 p-8 rounded-none hover:bg-zinc-900 transition-colors duration-150"
          >
            {/* 🔢 Label */}
            <div className="font-mono text-zinc-500 text-xs mb-6">
              // {String(index + 1).padStart(2, "0")}
            </div>

            {/* 🧾 Title */}
            <h3 className="text-lg font-semibold uppercase tracking-tight">
              {service.title}
            </h3>

            {/* ✨ Description */}
            <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
              {service.description}
            </p>

            {/* ➜ Learn More */}
            <div className="mt-8 flex items-center text-xs uppercase tracking-wide">
              <span className="text-zinc-400 group-hover:text-zinc-50 transition-colors">
                Learn More
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
    </section>
  );
}
