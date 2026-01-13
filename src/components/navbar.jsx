"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="font-bold text-xl text-gray-900">FreshCart</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-green-600 transition"
            >
              Home
            </Link>
            <Link
              href="/items"
              className="text-gray-600 hover:text-green-600 transition"
            >
              Shop
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-green-600 transition"
            >
              Dashboard
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-green-600 transition"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-green-600 transition"
            >
              Contact
            </Link>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4">
            <button className="relative p-2 text-gray-600 hover:text-green-600">
              <ShoppingCart size={24} />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            <Link
              href="/login"
              className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              className="p-2 text-gray-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-green-100">
            <Link
              href="/"
              className="block py-2 text-gray-600 hover:text-green-600"
            >
              Home
            </Link>
            <Link
              href="/items"
              className="block py-2 text-gray-600 hover:text-green-600"
            >
              Shop
            </Link>
            <Link
              href="/dashboard"
              className="block py-2 text-gray-600 hover:text-green-600"
            >
              Dashboard
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-600 hover:text-green-600"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-600 hover:text-green-600"
            >
              Contact
            </Link>
            <Link
              href="/login"
              className="block mt-4 px-4 py-2 text-white bg-green-600 rounded-lg text-center hover:bg-green-700 transition"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
