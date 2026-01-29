"use client";

import { Leaf, Truck, Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Leaf,
      title: "Organic & Fresh",
      description:
        "All our products are sourced from trusted local farms with no preservatives.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Same-day delivery available for orders placed before 2 PM.",
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description:
        "We inspect every item to ensure premium quality and freshness.",
    },
    {
      icon: TrendingUp,
      title: "Best Prices",
      description:
        "Direct from farmers means better prices for you without middlemen.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            variants={titleVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose FreshCart?
          </motion.h2>
          <motion.p variants={titleVariants} className="text-gray-600 text-lg">
            We're committed to delivering the best grocery experience
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
              >
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition h-full">
                  <motion.div
                    className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4"
                    variants={iconVariants}
                  >
                    <Icon className="text-green-600" size={24} />
                  </motion.div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
