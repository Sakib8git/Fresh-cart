"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ShoppingCart, Star, Heart, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { allProducts } from "@/lib/products";

export default function ItemDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (params?.id) {
      const foundProduct = allProducts.find(
        (p) => p.id === Number.parseInt(params.id)
      );
      setProduct(foundProduct || null);
    }
  }, [params]);

  if (!product) {
    return (
      <main className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-12 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Product not found
            </h1>
            <Link
              href="/items"
              className="text-green-600 hover:text-green-700 font-semibold"
            >
              Back to Shop
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Link
          href="/items"
          className="flex items-center gap-2 text-green-600 hover:text-green-700 mb-8"
        >
          <ChevronLeft size={20} />
          Back to Shop
        </Link>

        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="bg-gradient-to-b from-green-100 to-emerald-100 rounded-lg p-8 md:p-12 flex items-center justify-center h-96 md:h-full min-h-80">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-3">
                {product.category.charAt(0).toUpperCase() +
                  product.category.slice(1)}
              </span>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                {product.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  ({product.rating} out of 5)
                </span>
              </div>
            </div>

            {/* Price and Stock */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-green-600">
                  ${product.price.toFixed(2)}
                </span>
                <span
                  className={`text-lg font-semibold ${
                    product.inStock ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                >
                  -
                </button>
                <span className="text-xl font-semibold w-12 text-center text-gray-900">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-6">
              <button className="flex-1 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2">
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center transition ${
                  isFavorite
                    ? "bg-red-50 border-red-300"
                    : "border-gray-300 hover:border-red-300"
                }`}
              >
                <Heart
                  size={20}
                  className={
                    isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
                  }
                />
              </button>
            </div>

            {/* Product Details Tabs */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Nutritional Information
                </h3>
                <p className="text-gray-600">{product.nutrition}</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Origin</h3>
                <p className="text-gray-600">{product.origin}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProducts.map((relProd) => (
                <Link
                  key={relProd.id}
                  href={`/items/${relProd.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                >
                  <div className="bg-gradient-to-b from-green-100 to-emerald-100 p-6 flex items-center justify-center h-40">
                    <img
                      src={relProd.image || "/placeholder.svg"}
                      alt={relProd.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                      {relProd.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-green-600">
                        ${relProd.price.toFixed(2)}
                      </span>
                      <span className="text-xs text-gray-600">
                        ⭐ {relProd.rating}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
