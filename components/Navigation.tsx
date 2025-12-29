"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
      suppressHydrationWarning
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative transition-transform duration-300 hover:scale-105">
              <Image
                src="/IMG_8507.PNG"
                alt="VNatural Logo"
                width={240}
                height={80}
                priority
                className="h-16 w-auto"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-colors duration-300 font-medium group ${
                  isScrolled
                    ? "text-gray-800 hover:text-emerald-700"
                    : "text-white hover:text-emerald-200"
                }`}
                suppressHydrationWarning
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${
                    isScrolled
                      ? "from-green-600 to-emerald-600"
                      : "from-white to-emerald-200"
                  } group-hover:w-full transition-all duration-300`}
                  suppressHydrationWarning
                ></span>
              </Link>
            ))}
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors ${
              isScrolled
                ? "text-gray-900 hover:text-emerald-600"
                : "text-white hover:text-emerald-200"
            }`}
            suppressHydrationWarning
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-900 hover:text-emerald-600 transition-colors font-medium py-2"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
              <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full font-medium shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
}
