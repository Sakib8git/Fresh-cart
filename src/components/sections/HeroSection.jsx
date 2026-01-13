"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Fresh Groceries Delivered to Your Door
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Experience farm-fresh produce, organic items, and quality products
              sourced from local farmers. Quick, convenient, and always fresh.
            </p>
            <div className="flex gap-4">
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
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 flex items-center justify-center h-80">
            <div className="w-full h-full bg-gradient-to-br from-green-200 to-emerald-300 rounded-lg flex items-center justify-center">
              <span className="text-6xl">🥬</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
