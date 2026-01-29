"use client";
import Link from "next/link";
import { allProducts } from "@/lib/products";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FeaturedProducts() {
  const featuredProducts = allProducts.slice(0, 4);

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
          <motion.h2 variants={titleVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </motion.h2>
          <motion.p variants={titleVariants} className="text-gray-600 text-lg">
            Handpicked fresh items available this week
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Link href={`/items/${product.id}`}>
                <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer h-full">
                  <div className="bg-gradient-to-b from-green-100 to-emerald-100 p-6 flex items-center justify-center h-40">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={160}
                      height={160}
                      className="object-contain w-50 lg:w-90 rounded-lg transition-transform duration-500 ease-in-out hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xl font-bold text-green-600">
                        {product.price}
                      </span>
                      <span className="text-sm text-gray-600">
                        ⭐ {product.rating}
                      </span>
                    </div>
                    <button className="w-full py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
