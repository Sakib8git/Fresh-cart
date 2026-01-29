"use client"

import { Mail } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Newsletter signup successful! Check ${email} for confirmation.`)
    setEmail("")
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1 },
    }),
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, delay: 0.1 },
    },
    float: {
      y: [-8, 8, -8],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  }

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.3 },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.3 },
    },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 md:p-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={iconVariants} animate="float" className="w-12 h-12 text-green-600 mx-auto mb-4">
            <Mail className="w-full h-full" />
          </motion.div>
          <motion.h2 custom={0} variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay Updated
          </motion.h2>
          <motion.p custom={1} variants={itemVariants} className="text-gray-600 text-lg mb-8">
            Subscribe to get updates on new products, special offers, and tips on healthy living.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit}
            className="flex gap-2 flex-col sm:flex-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.input
              variants={inputVariants}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-green-600"
            />
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              type="submit"
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition whitespace-nowrap"
            >
              Subscribe
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}
