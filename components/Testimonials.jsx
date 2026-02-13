"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Professional, fast, and incredibly easy to work with. Aurion transformed our online presence.",
    author: "Client Name",
  },
  {
    quote:
      "Exceptional attention to detail and performance. The final product exceeded expectations.",
    author: "Happy Customer",
  },
  {
    quote:
      "Clear communication, clean design, and flawless execution from start to finish.",
    author: "Business Owner",
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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 24,
    },
  },
};

export default function Testimonials() {
  return (
    <section className="relative bg-white text-black px-6 md:px-12 py-24 overflow-hidden">
      
      {/* 🔳 Header */}
      <div className="mb-16">
        <div className="flex items-center gap-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tighter">
            What Clients Say
          </h2>
          <div className="h-px flex-1 bg-zinc-300" />
        </div>

        <p className="mt-4 text-zinc-600 max-w-xl">
          Real feedback from clients who trusted us to design and build their
          digital presence.
        </p>
      </div>

      {/* 🧱 Testimonials Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-300"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group bg-white border border-zinc-300 p-8 rounded-none hover:bg-zinc-100 transition-colors duration-150"
          >
            {/* 🔢 Index */}
            <div className="font-mono text-zinc-500 text-xs mb-6">
              // {String(index + 1).padStart(2, "0")}
            </div>

            {/* ✨ Quote */}
            <p className="text-sm text-zinc-800 leading-relaxed">
              “{testimonial.quote}”
            </p>

            {/* 👤 Author */}
            <div className="mt-6 text-xs uppercase tracking-wide text-zinc-500">
              — {testimonial.author}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
