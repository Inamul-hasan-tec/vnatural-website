'use client';

import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
