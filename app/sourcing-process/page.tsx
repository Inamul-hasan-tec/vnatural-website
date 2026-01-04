'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Shield, Users, Globe, MapPin, Award, AlertCircle, TrendingUp, Leaf, Eye } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';

export default function SourcingProcess() {
  const procurementChannels = [
    {
      icon: Users,
      emoji: '🌾',
      title: 'Direct Producers & Communities',
      items: [
        'Farmers and farmer collectives',
        'Farmer Producer Organizations (FPOs)',
        'Tribal and indigenous groups',
        'Natural home-made and cottage-scale producers',
      ],
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: MapPin,
      emoji: '🏷️',
      title: 'Regionally Famous & Geo-Tagged Products',
      items: [
        'Products known for regional identity and heritage',
        'Geo-tag verified specialties',
        'State-specific and cultural food traditions',
        'Inter-state sourcing across India',
      ],
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Globe,
      emoji: '🌍',
      title: 'Certified Organic Import & Export Partners',
      items: [
        'Government-registered and certified organic traders',
        'Export-grade quality processors',
        'Compliance with Indian and international organic standards',
        'Transparent supply and documentation systems',
      ],
      color: 'from-purple-500 to-indigo-600',
    },
  ];

  const sourcingRules = [
    {
      icon: Eye,
      rule: 'No sourcing without understanding the complete process',
      description: 'We thoroughly investigate every step of production',
    },
    {
      icon: Shield,
      rule: 'No onboarding without unit or system verification',
      description: 'Physical verification is mandatory for all partners',
    },
    {
      icon: Award,
      rule: 'No compromise on consistency and quality',
      description: 'Standards are maintained across all batches',
    },
    {
      icon: Users,
      rule: 'No sourcing without real market or customer feedback',
      description: 'Products must have proven track records',
    },
    {
      icon: AlertCircle,
      rule: 'No trading through unknown or unaccountable middlemen',
      description: 'Direct relationships with verified sources only',
    },
  ];

  const principles = [
    'Verification, traceability, and accountability',
    'Thorough evaluation of origin, process, consistency, and credibility',
    'Work only with certified and accountable trade partners',
    'Not brokers or unverified intermediaries',
    'If traceability breaks at any point, we do not procure the product',
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
              🔍 Our Process
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Our Sourcing <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Process</span>
            </h1>
            <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed font-medium mb-4">
              Verified, geo-tagged, accountable.
            </p>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              How We Procure What You Consume
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
              At VNatural, sourcing is governed by:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl"
                >
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg font-medium">{principle}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="📋 Our Framework"
            title="Procurement"
            highlight="Framework"
            description="We source products through the following verified channels:"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
            {procurementChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-white to-emerald-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-emerald-200"
              >
                <div className={`bg-gradient-to-br ${channel.color} p-5 rounded-2xl w-fit mb-4`}>
                  <channel.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl mb-4">{channel.emoji}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{channel.title}</h3>
                <ul className="space-y-3">
                  {channel.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
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
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Our Commitment</h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              We work only with certified and accountable trade partners, not brokers or unverified intermediaries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="⚠️ Non-Negotiable"
            title="Sourcing"
            highlight="Rules"
            description="These principles guide every procurement decision we make"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {sourcingRules.map((item, index) => (
              <motion.div
                key={item.rule}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-3xl shadow-xl border-2 border-red-200 hover:border-red-400 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-red-500 to-orange-600 p-4 rounded-2xl">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{item.rule}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 bg-gradient-to-br from-red-50 to-orange-50 border-4 border-red-500 rounded-3xl p-10 text-center"
          >
            <AlertCircle className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4 text-gray-900">The Bottom Line</h3>
            <p className="text-2xl font-bold text-red-600 max-w-3xl mx-auto leading-relaxed">
              If traceability breaks at any point, we don't procure the product.
            </p>
          </motion.div>
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
            <TrendingUp className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Process Over Promises
            </h2>
            <p className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
              Trust Over Transactions
            </p>
            <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Our sourcing process isn't just about finding products—it's about building a sustainable, 
              transparent, and accountable ecosystem that you can trust with your health and wellbeing.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
