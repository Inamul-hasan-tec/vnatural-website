'use client';

import { motion } from 'framer-motion';
import { Users, Shield, CheckCircle, Award, TrendingUp, Heart, Globe, Leaf, Eye, Target } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';

export default function SupplyPartners() {
  const partnerTypes = [
    {
      icon: Users,
      title: 'Farmers and Farmer Groups',
      description: 'Direct partnerships with farming communities',
      emoji: '👨‍🌾',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Leaf,
      title: 'Tribal & Indigenous Communities',
      description: 'Supporting traditional producer communities',
      emoji: '🌿',
      color: 'from-teal-500 to-cyan-600',
    },
    {
      icon: Award,
      title: 'Natural Home-Made Producers',
      description: 'Small-batch and cottage-scale manufacturers',
      emoji: '🏺',
      color: 'from-orange-500 to-amber-600',
    },
    {
      icon: Target,
      title: 'Geo-Tagged Product Producers',
      description: 'Regionally reputed and verified sources',
      emoji: '📍',
      color: 'from-red-500 to-pink-600',
    },
    {
      icon: Globe,
      title: 'Certified Organic Traders',
      description: 'Import & export partners with certifications',
      emoji: '🌍',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Shield,
      title: 'Ethical International Suppliers',
      description: 'Inter-state and global ethical partners',
      emoji: '🤝',
      color: 'from-purple-500 to-violet-600',
    },
  ];

  const selectionStandards = [
    {
      icon: Eye,
      title: 'Transparent Sourcing & Processing',
      description: 'Complete visibility into production methods and supply chain',
    },
    {
      icon: Shield,
      title: 'Compliance with Standards',
      description: 'Adherence to food safety and organic certification requirements',
    },
    {
      icon: Award,
      title: 'Consistent Quality & Supply',
      description: 'Proven capability to maintain quality and reliable delivery',
    },
    {
      icon: Leaf,
      title: 'Ethical & Sustainable Practices',
      description: 'Commitment to environmental and social responsibility',
    },
    {
      icon: CheckCircle,
      title: 'Audit Willingness',
      description: 'Open to continuous monitoring and verification processes',
    },
  ];

  const benefits = [
    {
      icon: Leaf,
      title: 'Preserve Local Authenticity',
      description: 'Maintain traditional methods and regional specialties',
    },
    {
      icon: Globe,
      title: 'Enable Global Access',
      description: 'Bring natural products to customers worldwide',
    },
    {
      icon: CheckCircle,
      title: 'Maintain Traceability',
      description: 'Complete documentation and compliance at every step',
    },
    {
      icon: TrendingUp,
      title: 'Deliver Consistent Quality',
      description: 'Scale operations without compromising standards',
    },
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
              🤝 Our Partners
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Our Supply <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Partners</span>
            </h1>
            <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed font-medium mb-4">
              Local roots. Global standards.
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Trusted Sources, Verified Relationships
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-emerald-200"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
              Built on Long-Term Partnerships
            </h2>
            <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
              VNatural&apos;s supply ecosystem is built on long-term partnerships, not short-term procurement.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="👥 Who They Are"
            title="Our Supply"
            highlight="Partners"
            description="We work with diverse partners who share our commitment to quality and transparency"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {partnerTypes.map((partner, index) => (
              <motion.div
                key={partner.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-white to-emerald-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-emerald-200 cursor-pointer group"
              >
                <div className={`bg-gradient-to-br ${partner.color} p-5 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <partner.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl mb-4">{partner.emoji}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{partner.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="✅ Selection Criteria"
            title="Partner Selection"
            highlight="Standards"
            description="Every supply partner must demonstrate these core capabilities"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {selectionStandards.map((standard, index) => (
              <motion.div
                key={standard.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-emerald-200"
              >
                <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-5 rounded-2xl w-fit mb-6">
                  <standard.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{standard.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{standard.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-10 text-white shadow-2xl text-center"
          >
            <Heart className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Not Vendors, But Partners</h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              We do not treat them as vendors. They are custodians of quality and trust within the VNatural ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="🎯 Why It Works"
            title="Why This Model"
            highlight="Works"
            description="Our hybrid sourcing approach delivers multiple benefits"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-emerald-200 text-center"
              >
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-5 rounded-2xl w-fit mb-6 mx-auto">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
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
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Core Principle
            </h2>
            <p className="text-3xl font-bold text-white/95 max-w-3xl mx-auto leading-relaxed mb-4">
              Process Over Promises
            </p>
            <p className="text-3xl font-bold text-white/95 max-w-3xl mx-auto leading-relaxed">
              Trust Over Transactions
            </p>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed mt-8">
              All while staying true to our commitment to deliver authentic, verified, and traceable natural products that you can trust.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
