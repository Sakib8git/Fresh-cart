"use client";

import { useState } from "react";
import { Filter, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { allProducts } from "@/lib/products";

const categories = [
  { id: "all", name: "All Products" },
  { id: "vegetables", name: "Vegetables" },
  { id: "fruits", name: "Fruits" },
  { id: "dairy", name: "Dairy" },
  { id: "grains", name: "Grains" },
  { id: "fish", name: "Fish" },
];

export default function ItemsList() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("popular");

  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="flex gap-6">
      {/* Sidebar Filters */}
      <div
        className={`${
          showFilters ? "block" : "hidden"
        } md:block w-full md:w-48 flex-shrink-0`}
      >
        <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
          <div className="flex justify-between items-center mb-6 md:mb-4">
            <h3 className="font-bold text-gray-900">Categories</h3>
            <button className="md:hidden" onClick={() => setShowFilters(false)}>
              <X size={20} />
            </button>
          </div>
          <div className="space-y-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setShowFilters(false);
                }}
                className={`w-full text-left px-4 py-2 rounded-lg transition ${
                  selectedCategory === cat.id
                    ? "bg-green-100 text-green-700 font-semibold"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {sortedProducts.map((product) => (
            <Link
              key={product.id}
              href={`/items/${product.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <div className="bg-gradient-to-b from-green-100 to-emerald-100 p-6 flex items-center justify-center h-40">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={160}
                  height={160}
                  className="object-contain w-50 lg:w-90 rounded-lg transition-transform duration-500 ease-in-out hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-green-600">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-xs text-gray-600">
                    ⭐ {product.rating}
                  </span>
                </div>
                <button className="w-full py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition text-sm">
                  Add to Cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
