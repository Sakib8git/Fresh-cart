"use client"

const products = [
  {
    id: 1,
    name: "Organic Tomatoes",
    price: "$4.99",
    image: "🍅",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Fresh Spinach",
    price: "$3.49",
    image: "🥬",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Crispy Carrots",
    price: "$2.99",
    image: "🥕",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Ripe Bananas",
    price: "$1.99",
    image: "🍌",
    rating: 4.8,
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 text-lg">Handpicked fresh items available this week</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition">
              <div className="bg-gradient-to-b from-green-100 to-emerald-100 p-8 flex items-center justify-center h-48">
                <span className="text-6xl">{product.image}</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold text-green-600">{product.price}</span>
                  <span className="text-sm text-gray-600">⭐ {product.rating}</span>
                </div>
                <button className="w-full py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
