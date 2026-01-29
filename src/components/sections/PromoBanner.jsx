'use client';

import Link from "next/link"
import { motion } from "framer-motion"

export default function PromoBanner() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2 },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.4 },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  }

  const pulseVariants = {
    animate: {
      boxShadow: [
        "0 0 0 0 rgba(255, 255, 255, 0.7)",
        "0 0 0 10px rgba(255, 255, 255, 0)",
      ],
      transition: { duration: 1.5, repeat: Infinity },
    },
  }

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-green-600 to-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          <motion.h2 variants={textVariants} className="text-3xl md:text-4xl font-bold text-white mb-4">
            Limited Time Offer
          </motion.h2>
          <motion.p variants={textVariants} className="text-green-100 text-lg mb-6">
            Get 20% off on your first order with code: FRESH20
          </motion.p>
          <motion.div variants={buttonVariants} whileHover="hover">
            <Link
              href="/items"
              className="inline-block px-8 py-3 bg-white text-green-600 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Shop Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
