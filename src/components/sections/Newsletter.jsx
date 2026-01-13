"use client";

import { Mail } from "lucide-react";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Newsletter signup successful! Check ${email} for confirmation.`);
    setEmail("");
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 md:p-12 text-center">
          <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Subscribe to get updates on new products, special offers, and tips
            on healthy living.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex gap-2 flex-col sm:flex-row"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-green-600"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
