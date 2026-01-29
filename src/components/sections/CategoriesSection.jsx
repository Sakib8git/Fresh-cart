"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  { name: "Vegetables", icon: "🥦", color: "bg-green-100" },
  { name: "Fruits", icon: "🍎", color: "bg-red-100" },
  { name: "Dairy", icon: "🧀", color: "bg-yellow-100" },
  { name: "Grains", icon: "🌾", color: "bg-amber-100" },
  { name: "Meat & Fish", icon: "🐟", color: "bg-blue-100" },
  { name: "Spices", icon: "🌶️", color: "bg-orange-100" },
];

export default function CategoriesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
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

  return (
    <section className="py-16 md:py-24 bg-white">
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
            Shop by Category
          </motion.h2>
          <motion.p variants={titleVariants} className="text-gray-600 text-lg">
            Browse our wide selection of fresh items
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {categories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link
                href="/items"
                className={`${category.color} p-6 rounded-lg text-center hover:shadow-lg transition cursor-pointer block h-full`}
              >
                <motion.div
                  className="text-4xl mb-2"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {category.icon}
                </motion.div>
                <p className="font-semibold text-gray-900">{category.name}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
