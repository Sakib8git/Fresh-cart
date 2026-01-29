"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    float: {
      y: [-10, 10, -10],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
            >
              Fresh Groceries Delivered to Your Door
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 mb-8"
            >
              Experience farm-fresh produce, organic items, and quality products
              sourced from local farmers. Quick, convenient, and always fresh.
            </motion.p>
            <motion.div variants={itemVariants} className="flex gap-4">
              <Link
                href="/items"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Shop Now
                <ChevronRight size={20} />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            animate="float"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 flex items-center justify-center h-80"
          >
            <div className="w-full h-full bg-gradient-to-br from-green-200 to-emerald-300 rounded-lg flex items-center justify-center">
              <Image
                  className="h-70 hover:shadow-md shadow-green-100 md:w-full lg:w-145 rounded-3xl hover:scale-105 hover:rotate-2 transition-transform duration-500 ease-in-out"
                  width={500}
                  height={500}
                  src="https://i.ibb.co.com/dwDyY0Sp/andrew-benjack-4ug-H7-Ti-Gj-A-unsplash.jpg"
                  alt="Fresh groceries"
                />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
