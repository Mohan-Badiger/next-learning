"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 24,
    },
  },
};

export default function CTA() {
  return (
    <section className="relative bg-black text-zinc-50 px-6 md:px-12 py-28 overflow-hidden">
      
      {/* 🎞 Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "url('/noise.png')",
          backgroundRepeat: "repeat",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative z-10 max-w-4xl"
      >
        {/* 🔳 Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tighter leading-[0.95]">
          Let’s Build Something Amazing
        </h2>

        {/* ✨ Text */}
        <p className="mt-6 text-zinc-500 text-base sm:text-lg max-w-2xl leading-relaxed">
          Have a project in mind? Let’s transform your ideas into a powerful,
          high-performing digital presence designed for growth, clarity, and
          impact.
        </p>

        {/* 🚀 CTA Button */}
        <div className="mt-10">
          <Link href='/contact'>
          <button className="group rounded-none border border-zinc-800 px-10 py-4 text-sm uppercase tracking-wide hover:bg-zinc-50 hover:text-black transition-all duration-150">
            <span className="inline-flex items-center">
              Contact Us
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                <ArrowUpRight size={16} />
              </span>
            </span>
          </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
