'use client';

import { motion } from 'framer-motion';
import { Camera, Video, MapPin, Users, Leaf, CheckCircle, Globe, Eye } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';

export default function Gallery() {
  const galleryCategories = [
    {
      icon: Leaf,
      title: 'Farms, Orchards & Cultivation',
      description: 'Real farms where our products begin their journey',
      emoji: '🌾',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Users,
      title: 'Producer Communities',
      description: 'Tribal, regional, and rural communities we partner with',
      emoji: '👥',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Camera,
      title: 'Product Preparation',
      description: 'Natural home-made and small-batch production processes',
      emoji: '🏺',
      color: 'from-orange-500 to-amber-600',
    },
    {
      icon: CheckCircle,
      title: 'Processing Units',
      description: 'Traditional and certified organic processing facilities',
      emoji: '🏭',
      color: 'from-purple-500 to-indigo-600',
    },
    {
      icon: MapPin,
      title: 'Geo-Tagged Origins',
      description: 'Regional specialties and verified origin locations',
      emoji: '📍',
      color: 'from-red-500 to-pink-600',
    },
    {
      icon: Eye,
      title: 'Quality Audits',
      description: 'On-ground verification visits and quality checks',
      emoji: '✅',
      color: 'from-teal-500 to-cyan-600',
    },
    {
      icon: Globe,
      title: 'Partner Facilities',
      description: 'Import and export partner handling standards',
      emoji: '🌍',
      color: 'from-indigo-500 to-blue-600',
    },
  ];

  const principles = [
    'Real sourcing, real people, real processes',
    'Never stock or staged content',
    'Complete transparency in every visual',
    'Geo-tagged and verified locations',
    'Documented quality checks and audits',
    'Traditional and modern processing methods',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-emerald-50 via-green-100 to-teal-50">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-400/30 to-emerald-500/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              rotate: [180, 0, 180],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-teal-400/30 to-cyan-500/30 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
              📸 Inside VNatural
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              VNatural <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Gallery</span>
            </h1>
            <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed font-medium mb-4">
              Real sources. Real stories.
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The VNatural Gallery provides a transparent window into our sourcing, partnerships, and verification practices.
              Through real photos and videos, we showcase the authentic journey of every product.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="🎥 What We Showcase"
            title="Inside Our"
            highlight="Ecosystem"
            description="Every visual reflects real sourcing, real people, and real processes—never stock or staged content."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-white to-emerald-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-emerald-200 cursor-pointer group"
              >
                <div className={`bg-gradient-to-br ${category.color} p-5 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl mb-4">{category.emoji}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{category.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Transparency Through <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Visuals</span>
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Our gallery is more than just images—it's proof of our commitment to transparency, 
                traceability, and authentic sourcing practices.
              </p>
              <div className="space-y-4">
                {principles.map((principle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 text-lg">{principle}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-emerald-600 to-green-600 rounded-3xl p-12 text-white shadow-2xl">
                <Camera className="w-16 h-16 mb-6" />
                <h3 className="text-3xl font-bold mb-6">Photos & Videos</h3>
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  Explore our comprehensive visual documentation of farms, communities, processing units, 
                  and quality verification processes across India and beyond.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <Camera className="w-8 h-8 mb-2 text-emerald-300" />
                    <p className="font-semibold text-lg">Photo Gallery</p>
                    <p className="text-white/80 text-sm">Coming Soon</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                    <Video className="w-8 h-8 mb-2 text-emerald-300" />
                    <p className="font-semibold text-lg">Video Stories</p>
                    <p className="text-white/80 text-sm">Coming Soon</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Eye className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              See What We See
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Every image and video in our gallery represents our commitment to showing you exactly 
              where your products come from, who makes them, and how they're verified for quality and authenticity.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
