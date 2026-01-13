import Link from "next/link"

export default function PromoBanner() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-green-600 to-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Limited Time Offer</h2>
          <p className="text-green-100 text-lg mb-6">Get 20% off on your first order with code: FRESH20</p>
          <Link
            href="/items"
            className="inline-block px-8 py-3 bg-white text-green-600 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  )
}
