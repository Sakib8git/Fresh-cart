"use client"

import Link from "next/link"

const categories = [
  { name: "Vegetables", icon: "🥦", color: "bg-green-100" },
  { name: "Fruits", icon: "🍎", color: "bg-red-100" },
  { name: "Dairy", icon: "🧀", color: "bg-yellow-100" },
  { name: "Grains", icon: "🌾", color: "bg-amber-100" },
  { name: "Meat & Fish", icon: "🐟", color: "bg-blue-100" },
  { name: "Spices", icon: "🌶️", color: "bg-orange-100" },
]

export default function CategoriesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 text-lg">Browse our wide selection of fresh items</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <Link
              key={index}
              href="/items"
              className={`${category.color} p-6 rounded-lg text-center hover:shadow-lg transition cursor-pointer`}
            >
              <div className="text-4xl mb-2">{category.icon}</div>
              <p className="font-semibold text-gray-900">{category.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
