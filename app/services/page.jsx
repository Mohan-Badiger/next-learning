"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Design & Development",
    description:
      "End-to-end digital experiences crafted with precision, performance, and visual authority.",
    points: [
      "UI/UX Systems",
      "Responsive Layouts",
      "Next.js / React Engineering",
      "Scalable MERN Solutions",
      "REST API Integration",
      "Authentication & Dashboards",
    ],
  },
  {
    number: "02",
    title: "Hosting & Deployment",
    description:
      "Secure, reliable, and optimized infrastructure ensuring speed, uptime, and stability.",
    points: [
      "Domain & Hosting Setup",
      "Cloud Deployment",
      "SSL & Security Hardening",
      "Performance Optimization",
    ],
  },
  {
    number: "03",
    title: "Maintenance & Support",
    description:
      "Continuous updates, monitoring, and improvements to keep your platform flawless.",
    points: [
      "Content Updates",
      "Bug Fixes",
      "Performance Monitoring",
      "Technical Assistance",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 22,
    },
  },
};

export default function ServicesPage() {
  return (
    <section className="relative bg-black text-zinc-50 min-h-screen px-6 md:px-12 py-20 overflow-hidden">
      
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
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tighter">
            Our Services
          </h1>
          <div className="h-px flex-1 bg-zinc-800" />
        </div>

        <p className="mt-4 text-zinc-500 max-w-2xl">
          High-performance digital solutions designed with a sharp focus on
          clarity, scalability, and business impact.
        </p>
      </div>

      {/* 🧱 Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800">
        {services.map((service) => (
          <motion.div
            key={service.number}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative group bg-black border border-zinc-800 p-8 rounded-none hover:bg-zinc-900 transition-colors duration-150"
          >
            {/* 🔢 Number */}
            <div className="font-mono text-zinc-500 text-sm mb-6">
              // {service.number}
            </div>

            {/* 🔲 Minimal Square Icon */}
            <div className="mb-6 w-10 h-10 border border-zinc-800 flex items-center justify-center">
              <div className="w-4 h-4 bg-zinc-50" />
            </div>

            {/* 🧾 Title */}
            <h3 className="text-xl font-semibold uppercase tracking-tight">
              {service.title}
            </h3>

            {/* ✨ Description */}
            <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
              {service.description}
            </p>

            {/* ✔ Points */}
            <ul className="mt-6 space-y-2">
              {service.points.map((point) => (
                <li key={point} className="text-xs text-zinc-400 tracking-wide">
                  ✔ {point}
                </li>
              ))}
            </ul>

            {/* ➜ Learn More */}
            <div className="mt-8 flex items-center text-sm uppercase tracking-wide">
              <span className="text-zinc-300 group-hover:text-zinc-50 transition-colors">
                Learn More
              </span>

              <motion.span
                className="ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <ArrowUpRight size={16} />
              </motion.span>
            </div>

            {/* ⚡ Sharp Border Glow */}
            <div className="absolute inset-0 border border-transparent group-hover:border-zinc-50 transition-all duration-150 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
