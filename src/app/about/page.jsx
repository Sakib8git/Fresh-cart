'use client';

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CheckCircle2, Leaf, Users, Award } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const heroVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={heroVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About FreshCart
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={heroVariants}
            transition={{ delay: 0.2 }}
            className="text-xl text-green-50"
          >
            Delivering Fresh, Quality Groceries to Your Doorstep
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <motion.section
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-900 mb-6">
            Our Story
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed mb-4">
            FreshCart was founded with a simple mission: to make fresh, organic groceries accessible to everyone. We
            believe that quality food should not be a luxury, but a necessity that everyone deserves.
          </motion.p>
          <motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed">
            Since our inception, we've been committed to partnering with local farmers and trusted suppliers to bring
            the freshest produce directly to your table. Every product on our platform is carefully selected and
            quality-checked to ensure you receive only the best.
          </motion.p>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-900 mb-8">
            Why Choose FreshCart?
          </motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants}>
            {[
              { icon: Leaf, title: "100% Fresh", desc: "We source directly from farms, ensuring maximum freshness for every item in your cart." },
              { icon: Users, title: "Local Farmers", desc: "We support local farming communities and sustainable agriculture practices." },
              { icon: Award, title: "Quality Assured", desc: "Every product undergoes rigorous quality checks before reaching your doorstep." },
              { icon: CheckCircle2, title: "Reliable Delivery", desc: "Fast and reliable delivery services to ensure your groceries arrive fresh and on time." },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Icon className="text-green-600" size={32} />
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          className="bg-green-50 rounded-lg p-12 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Impact
          </motion.h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center" variants={containerVariants}>
            {[
              { number: "50K+", label: "Happy Customers" },
              { number: "200+", label: "Partner Farmers" },
              { number: "10K+", label: "Products Available" },
              { number: "100%", label: "Organic Quality" },
            ].map((stat, index) => (
              <motion.div key={index} variants={numberVariants}>
                <p className="text-4xl font-bold text-green-600">{stat.number}</p>
                <p className="text-gray-600 text-lg mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Our Team */}
        <motion.section
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-900 mb-8">
            Our Team
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 text-lg mb-8">
            Our diverse team of dedicated professionals work tirelessly to bring you the best shopping experience. From
            farmers to logistics experts, each team member shares our passion for quality and freshness.
          </motion.p>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants}>
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm text-center"
              >
                <div className="w-full h-48 bg-gradient-to-b from-green-100 to-emerald-100 flex items-center justify-center">
                  <motion.span
                    className="text-6xl"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    👤
                  </motion.span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Member {item}</h3>
                  <p className="text-gray-600 text-sm mb-2">Role & Position</p>
                  <p className="text-gray-500 text-sm">
                    Passionate about delivering quality and excellence in everything we do.
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>

      <Footer />
    </main>
  )
}
