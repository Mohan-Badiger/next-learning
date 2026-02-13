"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-zinc-50 overflow-hidden">
      
      {/* 🔳 Subtle Square Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #27272a 1px, transparent 1px),
            linear-gradient(to bottom, #27272a 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* 🎯 Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-12 min-h-screen">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* 🧱 Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tighter leading-[0.95]"
          >
            Websites That Help <br /> Your Business Grow
          </motion.h1>

          {/* ✨ Subtext */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-zinc-500 text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
          >
            We design and build clean, modern websites that attract customers,
            build trust, and turn visitors into real enquiries.
          </motion.p>

          {/* 🚀 CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="rounded-none bg-zinc-50 text-black px-8 py-4 text-sm uppercase tracking-wide font-medium hover:scale-95 transition-transform duration-150">
              Get a Free Consultation
            </button>

            <button className="rounded-none border border-zinc-800 px-8 py-4 text-sm uppercase tracking-wide font-medium hover:bg-zinc-50 hover:text-black transition-all duration-150">
              View Our Work
            </button>
          </motion.div>

          {/* 🏆 Trust Line */}
          <motion.p
            variants={itemVariants}
            className="mt-12 text-xs sm:text-sm text-zinc-600"
          >
            “Auronix created a website that perfectly matched our business and
            helped us reach more customers.”
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
