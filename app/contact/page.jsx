"use client";

import { motion } from "framer-motion";

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

export default function ContactPage() {
  return (
    <section className="relative bg-black text-zinc-50 min-h-screen px-6 md:px-12 py-24 overflow-hidden">
      
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
        animate="visible"
        className="relative z-10 max-w-6xl"
      >
        {/* 🔳 Header */}
        <div className="mb-16">
          <div className="flex items-center gap-6">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tighter">
              Let’s Connect
            </h1>
            <div className="h-px flex-1 bg-zinc-800" />
          </div>

          <p className="mt-6 text-zinc-500 max-w-2xl text-base sm:text-lg leading-relaxed">
            Have a project, idea, or question? We’d love to hear from you.
            Let’s start a conversation and explore how we can build something
            exceptional together.
          </p>
        </div>

        {/* 🧱 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* 📞 Contact Details */}
          <div className="border border-zinc-800 p-8 rounded-none">
            <h2 className="text-xl font-semibold uppercase tracking-tight mb-6">
              Contact Details
            </h2>

            <div className="space-y-6 text-sm">
              <div>
                <p className="text-zinc-500 uppercase text-xs">Email</p>
                <p className="mt-1">hello@aurion.in</p>
              </div>

              <div>
                <p className="text-zinc-500 uppercase text-xs">
                  Phone / WhatsApp
                </p>
                <p className="mt-1">+91 XXXXX XXXXX</p>
              </div>

              <div>
                <p className="text-zinc-500 uppercase text-xs">Location</p>
                <p className="mt-1">India</p>
              </div>
            </div>
          </div>

          {/* 📝 Contact Form */}
          <div className="border border-zinc-800 p-8 rounded-none">
            <h2 className="text-xl font-semibold uppercase tracking-tight mb-2">
              Send a Message
            </h2>

            <p className="text-zinc-500 text-sm mb-6">
              Fill out the form below and we’ll get back to you shortly.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black border border-zinc-800 px-4 py-3 text-sm rounded-none focus:outline-none focus:border-zinc-50"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-black border border-zinc-800 px-4 py-3 text-sm rounded-none focus:outline-none focus:border-zinc-50"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full bg-black border border-zinc-800 px-4 py-3 text-sm rounded-none focus:outline-none focus:border-zinc-50 resize-none"
              />

              <button
                type="submit"
                className="rounded-none border border-zinc-800 px-8 py-3 text-sm uppercase tracking-wide hover:bg-zinc-50 hover:text-black transition-all duration-150"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
