'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description: string;
  centered?: boolean;
}

export default function SectionHeading({ 
  badge, 
  title, 
  highlight, 
  description, 
  centered = true 
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`mb-16 ${centered ? 'text-center' : ''}`}
    >
      {badge && (
        <span className="inline-block bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
        {title}{' '}
        {highlight && (
          <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>
      <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
