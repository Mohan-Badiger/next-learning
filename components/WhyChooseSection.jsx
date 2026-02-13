"use client";

import { motion } from "framer-motion";

const features = [
  "Custom-Tailored Solutions",
  "Mobile-First & Responsive",
  "Performance Optimized",
  "SEO-Friendly Structure",
  "Affordable & Transparent Pricing",
  "Long-Term Support",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 160,
      damping: 24,
    },
  },
};

export default function WhyChooseSection() {
  return (
    <section className="relative bg-black text-zinc-50 px-6 md:px-12 py-24 overflow-hidden">
      
      {/* Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "url('/noise.png')",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Header */}
      <div className="relative z-10 mb-16">
        <div className="flex items-center gap-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tighter">
            Why Work With Us
          </h2>
          <div className="h-px flex-1 bg-zinc-800" />
        </div>

        <p className="mt-4 text-zinc-500 max-w-xl">
          We combine strategy, design precision, and engineering excellence
          to deliver measurable digital impact.
        </p>
      </div>

      {/* Features Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature}
            variants={itemVariants}
            className="group relative bg-black border border-zinc-800 p-8 rounded-none hover:bg-zinc-900 transition-colors duration-150"
          >
            {/* Number */}
            <div className="font-mono text-zinc-500 text-xs mb-6">
              // {String(index + 1).padStart(2, "0")}
            </div>

            {/* Feature */}
            <div className="flex items-start gap-3">
              <span className="text-zinc-50 font-mono">✔</span>
              <p className="text-sm uppercase tracking-wide text-zinc-300 group-hover:text-zinc-50 transition-colors">
                {feature}
              </p>
            </div>

            {/* Border Glow */}
            <div className="absolute inset-0 border border-transparent group-hover:border-zinc-50 transition-all duration-150 pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
