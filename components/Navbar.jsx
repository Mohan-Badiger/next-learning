import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full shadow-md bg-white fixed font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="text-2xl font-semibold font-sans">
            <Link href="/">Next</Link>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-md font-medium">
            <Link href="/" className="hover:text-blue-950">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-950">
              About
            </Link>
            <Link href="/services" className="hover:text-blue-950">
              Services
            </Link>
            <Link href="/login" className="hover:text-blue-950">
              Login
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
