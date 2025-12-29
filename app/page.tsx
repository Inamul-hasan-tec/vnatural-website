"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Leaf,
  Heart,
  Shield,
  ArrowRight,
  Star,
  Stethoscope,
  Brain,
  Apple,
  Package,
  CheckCircle,
  Users,
  Globe,
  Zap,
  ShoppingCart,
  Activity,
  Bot,
  UserCheck,
  TrendingUp,
  Award,
  Target,
  Droplet,
  Wheat,
  Flame,
  Droplets,
  Pill,
  ShoppingBag,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import FloatingElements from "@/components/FloatingElements";

export default function Home() {
  const pillars = [
    {
      icon: Package,
      number: "1",
      title: "Natural & Specialty Products",
      description:
        "Direct sourcing of pure, organic, tribal, and regional products from verified farmers and producers.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: ShoppingCart,
      number: "2",
      title: "Interactive & Quick Commerce",
      description:
        "Smart, guided shopping with fast delivery. Health-based discovery and personalized recommendations.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Stethoscope,
      number: "3",
      title: "Medical & AI Health Support",
      description:
        "MedTel consultations + AI Virtual Doctor for 24/7 health guidance and continuous care.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Activity,
      number: "4",
      title: "Complete Wellness Ecosystem",
      description:
        "Integrated nutrition, lifestyle guidance, and preventive care for long-term health.",
      color: "from-orange-500 to-red-600",
    },
  ];

  const productCategories = [
    { icon: Wheat, name: "Staples & Grains", count: "50+", emoji: "🌾" },
    { icon: Droplet, name: "Oils & Fats", count: "30+", emoji: "🫒" },
    { icon: Flame, name: "Spices & Condiments", count: "40+", emoji: "🌶️" },
    { icon: Droplets, name: "Natural Sweeteners", count: "15+", emoji: "🍯" },
    { icon: Pill, name: "Herbal & Wellness", count: "60+", emoji: "🌿" },
    { icon: ShoppingBag, name: "Tribal & Regional", count: "25+", emoji: "🧺" },
  ];

  const sourcingPrinciples = [
    {
      icon: CheckCircle,
      title: "Direct Sourcing",
      desc: "From farmers, FPOs, SHGs, tribal communities - no middlemen",
    },
    {
      icon: Shield,
      title: "Verified Quality",
      desc: "Physical verification of farms, units, and production processes",
    },
    {
      icon: Target,
      title: "Batch-Level Checks",
      desc: "Consistent quality assurance and testing for every batch",
    },
    {
      icon: Users,
      title: "Customer Feedback",
      desc: "Real market acceptance and customer reviews drive selection",
    },
    {
      icon: Globe,
      title: "Ethical Practices",
      desc: "Sustainable, transparent, and responsible sourcing always",
    },
    {
      icon: Award,
      title: "No Compromise",
      desc: "If we don't trust it, we don't source it - period",
    },
  ];

  const usps = [
    "Direct sourcing – no middlemen",
    "Process & unit verification",
    "Consistent quality assurance",
    "Customer feedback-driven selection",
    "Integrated food + medical + AI platform",
    "24/7 virtual health support",
    "Personalized nutrition guidance",
    "Ethical, transparent, responsible sourcing",
    "Curated products, not crowded listings",
    "Wellness-first, not commerce-first",
  ];

  const ecosystemLayers = [
    {
      icon: Apple,
      title: "Natural & Healthy Food",
      desc: "Pure products from verified sources",
    },
    {
      icon: Zap,
      title: "Smart Commerce",
      desc: "Interactive & quick delivery",
    },
    {
      icon: Stethoscope,
      title: "Medical Consultation",
      desc: "MedTel doctor support",
    },
    {
      icon: Bot,
      title: "AI-Powered Support",
      desc: "24/7 virtual health assistant",
    },
    {
      icon: UserCheck,
      title: "Nutrition & Lifestyle",
      desc: "Personalized diet & wellness plans",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/hero-nature.jpg)",
              backgroundPosition: "center center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-vn-forest-darker/30 via-transparent to-vn-forest/30" />
          <motion.div
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-t from-vn-forest/20 via-transparent to-transparent"
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
              <h3 className="inline-block bg-white/95 backdrop-blur-sm text-emerald-800 px-8 py-3 rounded-full text-sm font-bold mb-4 shadow-2xl border-2 border-emerald-200">
                🌿 Nature • Nutrition • Technology • Wellness
              </h3>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white drop-shadow-2xl"
              style={{
                textShadow:
                  "0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(16, 185, 129, 0.3)",
              }}
            >
              Redefining Wellness
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white mb-8 max-w-4xl mx-auto font-medium backdrop-blur-sm bg-black/20 p-6 rounded-2xl border border-white/20 shadow-2xl"
              style={{
                textShadow: "0 2px 10px rgba(0,0,0,0.5)",
              }}
            >
              A next-generation wellness ecosystem delivering pure products,
              transparent sourcing, smart commerce, and continuous health
              support—all under one trusted platform.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-vn-lime-light/90 mb-12 max-w-3xl mx-auto font-semibold"
              style={{
                textShadow: "0 2px 10px rgba(0,0,0,0.7)",
              }}
            >
              From farm to food • From food to health • From health to lifelong
              wellness
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(255, 255, 255, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-12 py-5 rounded-full font-bold text-xl shadow-2xl transition-all duration-300 flex items-center gap-3 border-2 border-white/50"
              >
                Explore Products
                <ArrowRight className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-md text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl transition-all duration-300 border-2 border-white/40"
              >
                Learn More
              </motion.button>
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
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* What We Do - Four Pillars */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50 relative">
        <FloatingElements />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            badge="🎯 Our Integrated Approach"
            title="Four Pillars of"
            highlight="VNatural"
            description="We operate across four integrated pillars that create a complete 360° health and wellness experience. Together, they enable better living, preventive healthcare, and long-term wellness."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(5, 150, 105, 0.25)",
                }}
                className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-emerald-100 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 text-9xl font-bold text-emerald-200 opacity-50">
                  {pillar.number}
                </div>
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`bg-gradient-to-br ${pillar.color} p-5 rounded-2xl w-fit mb-6 relative z-10 group-hover:shadow-2xl`}
                >
                  <pillar.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 relative z-10">
                  {pillar.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg relative z-10">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="🛒 Our Product Range"
            title="Natural Products"
            highlight="Categories"
            description="Curated selection of pure, organic, tribal, and regional products across six major categories. Every product meets our strict standards for purity, authenticity, and health value."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.08, y: -8, rotate: [0, -2, 2, 0] }}
                className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-emerald-200 text-center cursor-pointer"
              >
                <div className="text-5xl mb-4">{category.emoji}</div>
                <h4 className="font-bold text-gray-900 mb-2 text-sm">
                  {category.name}
                </h4>
                <p className="text-emerald-600 font-bold text-lg">
                  {category.count}
                </p>
                <p className="text-gray-600 text-xs mt-1">Products</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Philosophy */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 2px, transparent 2px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-bold mb-4 border border-white/30">
              ⚖️ Non-Negotiable Standards
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Sourcing Philosophy
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              At VNatural, sourcing is responsibility, not procurement. If we
              don't trust the process, people, or consistency—we simply don't
              source the product.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sourcingPrinciples.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
              >
                <principle.icon className="w-12 h-12 mb-4 text-emerald-200" />
                <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                <p className="text-emerald-100 leading-relaxed">
                  {principle.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Global & Local Sourcing
              </h3>
              <p className="text-emerald-100 text-lg leading-relaxed">
                We source across India's regions and tribal belts, from
                traditional and indigenous producers, and from ethical
                international sources. Whether local or global, every product
                meets one universal VNatural standard:{" "}
                <span className="font-bold text-white">
                  Purity • Authenticity • Health Value • Traceability
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MedTel & AI Support */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="🏥 Healthcare Integration"
            title="Medical Support &"
            highlight="AI Technology"
            description="VNatural integrates advanced healthcare technology to ensure you have medical support whenever you need it. From doctor consultations to 24/7 AI assistance."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-10 rounded-3xl shadow-xl border-2 border-blue-200"
            >
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-5 rounded-2xl w-fit mb-6">
                <Stethoscope className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                MedTel – Digital Medical Support
              </h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Access professional medical consultations from the comfort of
                your home.
              </p>
              <ul className="space-y-3">
                {[
                  "Online doctor consultations",
                  "Basic health check support",
                  "Digital health records",
                  "Preventive health guidance",
                  "Follow-up and continuity of care",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-10 rounded-3xl shadow-xl border-2 border-purple-200"
            >
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-5 rounded-2xl w-fit mb-6">
                <Bot className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                AI Virtual Doctor – 24/7 Support
              </h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Continuous health assistance powered by advanced AI technology.
              </p>
              <ul className="space-y-3">
                {[
                  "Answering health queries instantly",
                  "Providing symptom guidance",
                  "Offering lifestyle suggestions",
                  "Supporting preventive care",
                  "Assisting between doctor visits",
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nutrition Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="🥗 Personalized Nutrition"
            title="Expert Nutritionist &"
            highlight="Dietitian Support"
            description="Because food is powerful—when used correctly. Get personalized diet plans from certified nutritionists and professional dietitians aligned with your health goals."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: UserCheck,
                title: "Certified Professionals",
                desc: "Work with qualified nutritionists and dietitians",
              },
              {
                icon: Target,
                title: "Personalized Plans",
                desc: "Diet plans tailored to your health condition and goals",
              },
              {
                icon: TrendingUp,
                title: "Continuous Support",
                desc: "Regular follow-ups and plan adjustments",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange-200 text-center cursor-pointer"
              >
                <div className="bg-gradient-to-br from-orange-500 to-red-600 p-4 rounded-xl w-fit mx-auto mb-6">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Wellness Ecosystem */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="🌟 Integrated Platform"
            title="Complete Wellness"
            highlight="Ecosystem"
            description="VNatural connects five critical wellness layers to create a preventive, long-term, and sustainable health ecosystem. Everything you need in one place."
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {ecosystemLayers.map((layer, index) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.08, y: -12, rotate: [0, 1, -1, 0] }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-emerald-200 text-center cursor-pointer"
              >
                <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-4 rounded-xl w-fit mx-auto mb-4">
                  <layer.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{layer.title}</h4>
                <p className="text-gray-600 text-sm">{layer.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="✨ What Makes Us Different"
            title="Our Unique"
            highlight="Value Propositions"
            description="VNatural stands apart with our unwavering commitment to quality, transparency, and your complete wellness journey."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {usps.map((usp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center gap-4 bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-xl border-2 border-emerald-200 hover:border-emerald-400 transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <span className="font-semibold text-gray-800">{usp}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Heart className="w-16 h-16 mx-auto mb-6 text-emerald-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our Commitment to You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {[
                "Honesty over hype",
                "Quality over scale",
                "Care over commerce",
                "Technology with responsibility",
                "Wellness as a lifelong journey",
              ].map((commitment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                >
                  <p className="font-bold text-lg text-emerald-300">
                    {commitment}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-green-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 2px, transparent 2px)",
              backgroundSize: "50px 50px",
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
              Ready to Transform Your Wellness Journey?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-emerald-50 leading-relaxed">
              Join thousands who trust VNatural for authentic products, honest
              information, and complete wellness support. Experience the
              difference today.
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-700 px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
