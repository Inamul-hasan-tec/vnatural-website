'use client';

import { motion } from 'framer-motion';
import { Sparkles, Leaf, Heart, Shield, ArrowRight, Star } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  const features = [
    {
      icon: Leaf,
      title: '100% Natural Ingredients',
      description: 'Every product is crafted from pure, natural ingredients sourced directly from nature. No synthetic chemicals, no artificial additives - just the goodness of Mother Earth.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Shield,
      title: 'Certified Organic',
      description: 'All our products carry official organic certifications, ensuring they meet the strictest international standards for purity and sustainability.',
      color: 'from-teal-500 to-cyan-600',
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Formulated by experts to promote holistic health and wellbeing. From skincare to nutrition, we prioritize your health above all.',
      color: 'from-rose-500 to-pink-600',
    },
    {
      icon: Sparkles,
      title: 'Eco-Conscious',
      description: 'Sustainable sourcing, biodegradable packaging, and carbon-neutral shipping. We care for the planet as much as we care for you.',
      color: 'from-amber-500 to-orange-600',
    },
  ];

  const benefits = [
    'Premium Quality Ingredients',
    'Scientifically Tested',
    'Cruelty-Free Products',
    'Sustainable Sourcing',
    'Expert Formulations',
    'Customer Satisfaction',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/hero-nature.jpg)',
              backgroundPosition: 'center center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 via-transparent to-green-900/30" />
          <motion.div
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 via-transparent to-transparent"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="inline-block bg-white/95 backdrop-blur-sm text-emerald-700 px-8 py-3 rounded-full text-sm font-bold mb-4 shadow-2xl border-2 border-emerald-200">
                🌿 Pure & Natural Products
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white drop-shadow-2xl"
              style={{
                textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(16, 185, 129, 0.3)',
              }}
            >
              Embrace the Power of{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-green-300 to-teal-300 bg-clip-text text-transparent drop-shadow-2xl" style={{
                textShadow: '0 0 30px rgba(16, 185, 129, 0.8), 0 4px 20px rgba(0,0,0,0.5)',
              }}>Nature</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto font-medium backdrop-blur-sm bg-black/20 p-6 rounded-2xl border border-white/20 shadow-2xl"
              style={{
                textShadow: '0 2px 10px rgba(0,0,0,0.5)',
              }}
            >
              Experience the purity of nature with VNatural's premium range of organic products. 
              From natural skincare to wellness essentials, we bring you the finest ingredients 
              sourced sustainably from Mother Earth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(255, 255, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-700 px-12 py-5 rounded-full font-bold text-xl shadow-2xl transition-all duration-300 flex items-center gap-3 border-2 border-white/50"
              >
                Explore Products
                <ArrowRight className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-md text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl transition-all duration-300 border-2 border-white/40"
              >
                Learn More
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              {benefits.slice(0, 3).map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="flex items-center gap-3 text-white bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 shadow-xl"
                >
                  <Star className="w-5 h-5 text-emerald-300 fill-emerald-300" />
                  <span className="font-bold text-sm">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/80 bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Choose <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">VNatural</span>?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We're not just another natural products company. VNatural represents a commitment to purity, 
              sustainability, and your wellbeing. Every product is a testament to our dedication to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-emerald-100"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`bg-gradient-to-br ${feature.color} p-5 rounded-2xl w-fit mb-6`}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-12 text-white text-center shadow-2xl"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Our Product Range</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              {[
                { name: 'Natural Skincare', count: '25+ Products' },
                { name: 'Organic Wellness', count: '30+ Products' },
                { name: 'Herbal Supplements', count: '20+ Products' },
                { name: 'Essential Oils', count: '15+ Products' },
              ].map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
                >
                  <div className="text-4xl mb-3">🌿</div>
                  <h4 className="font-bold text-lg mb-2">{category.name}</h4>
                  <p className="text-emerald-100">{category.count}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Real stories from real people who've experienced the VNatural difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Wellness Enthusiast',
                text: 'VNatural products have completely transformed my skincare routine. My skin has never felt healthier and more radiant!',
                rating: 5,
              },
              {
                name: 'Michael Chen',
                role: 'Fitness Coach',
                text: 'The quality and purity of VNatural supplements are unmatched. I recommend them to all my clients.',
                rating: 5,
              },
              {
                name: 'Emily Rodriguez',
                role: 'Eco-Conscious Mom',
                text: 'Finally, a brand that cares about both my family\'s health and the environment. Love everything about VNatural!',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-200"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
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
            <Sparkles className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Lifestyle?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-emerald-50 leading-relaxed">
              Join over 50,000 satisfied customers who have embraced the natural way of living. 
              Experience the VNatural difference today and discover what true wellness feels like.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-700 px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              Get Started Today
            </motion.button>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: '50K+', label: 'Happy Customers' },
                { number: '100+', label: 'Natural Products' },
                { number: '99%', label: 'Satisfaction Rate' },
                { number: '15+', label: 'Countries Served' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-emerald-100">{stat.label}</div>
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
