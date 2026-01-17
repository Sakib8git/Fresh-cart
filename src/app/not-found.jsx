"use client"

import Link from "next/link"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="w-full h-64 mb-8 flex justify-center">
          <DotLottieReact
            src="https://lottie.host/07c81123-b25a-48db-a2b1-35e4932b9f4e/Y0yXnfXWcX.lottie"
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Page Not Found</h2>
        <p className="text-gray-600 mb-8 text-lg">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            <Home size={20} />
            Back to Home
          </Link>

          <Link
            href="/items"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
          >
            Browse Products
          </Link>
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-gray-600 text-sm mb-6">Quick links:</p>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/about" className="text-green-600 hover:text-green-700 font-medium text-sm">
              About Us
            </Link>
            <Link href="/contact" className="text-green-600 hover:text-green-700 font-medium text-sm">
              Contact
            </Link>
            <Link href="/dashboard" className="text-green-600 hover:text-green-700 font-medium text-sm">
              Dashboard
            </Link>
            <Link href="/feedback" className="text-green-600 hover:text-green-700 font-medium text-sm">
              Send Feedback
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
