'use client';

import { motion } from 'framer-motion';
import { Target, Users, Award, Lightbulb, Heart, Globe, Sprout, CheckCircle, Shield, TrendingUp, Leaf, Eye } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SectionHeading from '@/components/SectionHeading';

export default function About() {
  const beliefs = [
    {
      icon: Heart,
      title: 'Health is a Journey',
      description: 'Not a single product, a one-time consultation, or a quick fix. It\'s a continuous journey that starts with food, lifestyle, awareness, and the right support system.',
    },
    {
      icon: Shield,
      title: 'Transparency First',
      description: 'We believe in complete transparency from source to customer. No hidden processes, no marketing gimmicks—just honest information.',
    },
    {
      icon: Users,
      title: 'People Over Profit',
      description: 'We prioritize your health and wellbeing over commercial gains. Care over commerce, always.',
    },
  ];

  const whatWeBring = [
    'Natural, tribal, organic, regional, and unique products',
    'Direct sourcing without middlemen',
    'Interactive & quick commerce',
    'Medical consultations through MedTel',
    'AI Virtual Doctor for 24/7 support',
    'Personalized nutritionist & dietitian guidance',
  ];

  const timeline = [
    { year: '2023', title: 'Vision Born', description: 'VNatural was founded with a mission to revolutionize wellness through integration of nature, technology, and healthcare.' },
    { year: '2024', title: 'Platform Launch', description: 'Launched our comprehensive wellness ecosystem connecting products, medical support, and AI technology.' },
    { year: '2024', title: 'MedTel Integration', description: 'Integrated medical consultation services to provide complete healthcare support.' },
    { year: '2025', title: 'AI Doctor Launch', description: 'Introduced AI Virtual Doctor for 24/7 health assistance and preventive care guidance.' },
  ];

  const stats = [
    { number: '1000+', label: 'Natural Products' },
    { number: '500+', label: 'Direct Farmers' },
    { number: '24/7', label: 'AI Support' },
    { number: '100%', label: 'Verified Quality' },
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
              🌱 Our Story
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              About <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">VNatural</span>
            </h1>
            <p className="text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed font-medium mb-8">
              VNatural is a next-generation natural living and wellness ecosystem built to deliver pure products, 
              transparent sourcing, smart commerce, and continuous health support—all under one trusted platform.
            </p>
            <p className="text-2xl text-emerald-700 max-w-3xl mx-auto font-bold">
              We go beyond selling products. We enable better living, preventive healthcare, and long-term wellness.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center border-2 border-emerald-200"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: 'spring' }}
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="💡 Our Foundation"
            title="What We"
            highlight="Believe"
            description="VNatural was founded with strong beliefs that guide everything we do. These principles shape our approach to wellness, sourcing, and customer care."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {beliefs.map((belief, index) => (
              <motion.div
                key={belief.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-emerald-50 to-green-50 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-emerald-200 cursor-pointer group"
              >
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-5 rounded-2xl w-fit mb-6">
                  <belief.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{belief.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{belief.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-12 text-white shadow-2xl"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">What We Bring Together</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whatWeBring.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                >
                  <CheckCircle className="w-6 h-6 text-emerald-300 flex-shrink-0" />
                  <span className="font-semibold text-lg">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="🎯 Our Direction"
            title="Vision &"
            highlight="Mission"
            description="Our vision and mission drive us to create a globally trusted wellness ecosystem that transforms lives through transparency, access, and continuous care."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-10 rounded-3xl shadow-xl border-2 border-blue-200"
            >
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-5 rounded-2xl w-fit mb-6">
                <Eye className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To build a globally trusted wellness ecosystem that connects food, healthcare, technology, and people, 
                enabling healthier lives through transparency, access, and continuous care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-10 rounded-3xl shadow-xl border-2 border-emerald-200"
            >
              <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-5 rounded-2xl w-fit mb-6">
                <Target className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h3>
              <ul className="space-y-4">
                {[
                  'Deliver verified, natural, and healthy products',
                  'Ensure complete transparency from source to customer',
                  'Make healthcare and wellness accessible anytime',
                  'Integrate nutrition, medicine, and technology',
                  'Empower people to manage health proactively',
                ].map((mission, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700 text-lg">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>{mission}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="📅 Our Growth"
            title="Our"
            highlight="Journey"
            description="From vision to reality—here's how VNatural has evolved to become a comprehensive wellness ecosystem."
          />

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-600 via-emerald-600 to-teal-600 hidden md:block" />

            {timeline.map((milestone, index) => (
              <motion.div
                key={`${milestone.year}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gradient-to-br from-white to-emerald-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-emerald-200 cursor-pointer"
                  >
                    <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">{milestone.year}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">{milestone.description}</p>
                  </motion.div>
                </div>

                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full items-center justify-center shadow-lg">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>

                <div className="hidden md:block w-5/12" />
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
            <Sprout className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Who VNatural Is For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
              {[
                'Health-conscious individuals & families',
                'Seniors and preventive-care seekers',
                'Busy professionals',
                'People managing lifestyle conditions',
                'Natural living enthusiasts',
                'Anyone seeking authentic wellness support',
              ].map((audience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                >
                  <Users className="w-8 h-8 mb-3 mx-auto text-emerald-300" />
                  <p className="font-semibold text-lg">{audience}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Why Choose <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">VNatural</span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
              Because you deserve:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { icon: Shield, text: 'Food you can trust' },
                { icon: Lightbulb, text: 'Healthcare you can access easily' },
                { icon: Heart, text: 'Guidance you can rely on' },
                { icon: TrendingUp, text: 'A system that supports you every day' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white p-8 rounded-2xl shadow-xl border-2 border-emerald-200"
                >
                  <item.icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <p className="font-bold text-lg text-gray-900">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
