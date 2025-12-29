"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    social: [
      { icon: Facebook, href: "#", label: "Facebook" },
      { icon: Instagram, href: "#", label: "Instagram" },
      { icon: Twitter, href: "#", label: "Twitter" },
      { icon: Linkedin, href: "#", label: "LinkedIn" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/IMG_8507.PNG"
                alt="VNatural Logo"
                width={200}
                height={67}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Bringing you the finest natural and organic products for a
              healthier, sustainable lifestyle.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Info
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span>info@vnatural.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>123 Nature St, Green City</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300"
        >
          <p>
            &copy; {currentYear} VNatural. All rights reserved. Made with 💚 for
            nature.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
