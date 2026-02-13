"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-zinc-50 border-t border-zinc-800 px-6 md:px-12 py-10">
      
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        {/* 🔳 Brand / Copyright */}
        <div>
          <p className="text-sm font-medium tracking-tight">
            Auronix © 2026
          </p>
          <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wide">
            Crafting Premium Digital Experiences
          </p>
        </div>

        {/* 🧭 Navigation */}
        <nav className="flex flex-wrap gap-4 text-xs uppercase tracking-wide">
          <Link
            href="/"
            className="text-zinc-500 hover:text-zinc-50 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-zinc-500 hover:text-zinc-50 transition-colors"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-zinc-500 hover:text-zinc-50 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/pricing"
            className="text-zinc-500 hover:text-zinc-50 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="text-zinc-500 hover:text-zinc-50 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
