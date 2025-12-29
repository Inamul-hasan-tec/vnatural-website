'use client';

import { motion } from 'framer-motion';
import { Leaf, Sparkles, Heart } from 'lucide-react';

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 left-10 text-emerald-400/20"
      >
        <Leaf className="w-16 h-16" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute top-40 right-20 text-green-400/20"
      >
        <Sparkles className="w-12 h-12" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 8, -8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-32 left-1/4 text-teal-400/20"
      >
        <Heart className="w-14 h-14" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -18, 0],
          rotate: [0, -6, 6, 0],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
        className="absolute bottom-20 right-1/3 text-emerald-400/20"
      >
        <Leaf className="w-10 h-10" />
      </motion.div>
    </div>
  );
}
