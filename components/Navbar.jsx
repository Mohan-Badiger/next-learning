"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Home", "Service", "Work", "Contact"];

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 100; // 🔥 Vanish after 100px
      setVisible(window.scrollY < threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 🔝 Navbar Visibility Animation */}
      <AnimatePresence>
        {visible && (
          <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 22,
            }}
            className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-zinc-800"
          >
            <nav className="container max-w-1200px mx-auto px-6 md:px-10 py-5 flex items-center justify-between">

              {/* 🔳 Logo LEFT */}
              <Link
                href="/"
                className="sm:text-2xl font-bold uppercase tracking-tight text-white"
              >
                Auronix
              </Link>

              {/* 🧭 Desktop Links RIGHT */}
              <div className="hidden md:flex items-center gap-6 text-xs uppercase tracking-wide">
                {links.map((link) => (
                  <Link
                    key={link}
                    href={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`}
                    className="text-zinc-400 hover:text-white transition-colors duration-150"
                  >
                    {link}
                  </Link>
                ))}
              </div>

              {/* 📱 Mobile Toggle */}
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden text-zinc-400 hover:text-white transition-colors"
              >
                ☰
              </button>
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 25,
            }}
            className="fixed inset-0 bg-black z-50 flex flex-col"
          >
            {/* ❌ Close */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMobileOpen(false)}
                className="border border-zinc-800 px-4 py-2 text-zinc-400 hover:text-white rounded-none"
              >
                Close
              </button>
            </div>

            {/* 🔗 Links */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.08 },
                },
              }}
              className="flex flex-col items-center justify-center flex-1 gap-8"
            >
              {links.map((link) => (
                <motion.div
                  key={link}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.3 },
                    },
                  }}
                >
                  <Link
                    href={`/${link.toLowerCase()}`}
                    className="text-lg uppercase text-zinc-400 hover:text-white transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
