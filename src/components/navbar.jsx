"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import useAuthState from "@/hooks/useAuthState";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { logout } from "@/lib/auth";
import { useCart } from "./context/CartProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user } = useAuthState();
  const { getTotalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const totalItems = getTotalItems();

  console.log(user);

  return (
    <nav className="bg-white border-b border-green-100 top-0 z-50">
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

            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-green-600 transition"
                >
                  Dashboard
                </Link>
                <Link
                  href="/feedback"
                  className="text-gray-600 hover:text-green-600 transition"
                >
                  Feedback
                </Link>
              </>
            ) : (
              ""
            )}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/cart"
              className="relative p-2 text-gray-600 hover:text-green-600"
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <div className="relative">
              {user ? (
                <>
                  <button
                    onClick={() => setOpen(!open)}
                    className="focus:outline-none"
                  >
                    <Image
                      src="/man.png"
                      alt="User avatar"
                      width={40}
                      height={40}
                      className="rounded-full border border-gray-300 cursor-pointer"
                    />
                  </button>

                  {open && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                      <div className="px-4 py-2 text-gray-700 font-semibold border-b">
                        {user.displayName || user.email}
                      </div>
                      <button
                        onClick={logout}
                        className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-50"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href="/login"
                  className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
                >
                  Login
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Link href="/cart" className="relative p-2 text-gray-600">
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
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

            {user ? (
              <div className=" flex flex-col gap-1">
                <Link
                  href="/dashboard"
                  className="text-gray-600 hover:text-green-600 transition"
                >
                  Dashboard
                </Link>

                <Link
                  href="/feedback"
                  className="block py-2 text-gray-600 hover:text-green-600"
                >
                  Feedback
                </Link>
              </div>
            ) : (
              ""
            )}
            <div className="mt-2">
              {user ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/man.png"
                      alt="User avatar"
                      width={40}
                      height={40}
                      className="rounded-full border border-gray-300"
                    />
                    <p>{user.displayName || user.email}</p>
                  </div>
                  <button onClick={() => signOut(auth)}>Logout</button>
                </div>
              ) : (
                <Link
                  href="/login"
                  className="px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
