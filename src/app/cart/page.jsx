"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { Trash2, ArrowLeft, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Swal from "sweetalert2";
import { useCart } from "@/components/context/CartProvider";
import { useOrders } from "@/components/context/OrderContext";

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
  } = useCart();
  const { addOrder } = useOrders();
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);

  const total = getTotalPrice();

  const handleProceedToCheckout = async () => {
    // Show sweetalert confirmation
    const result = await Swal.fire({
      title: "Complete Your Order?",
      text: `You are about to place an order for $${total.toFixed(2)}. Do you want to proceed?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Complete Order",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      // Create order
      addOrder(cartItems, total);

      // Clear the cart
      clearCart();

      // Show success message
      await Swal.fire({
        title: "Order Placed!",
        text: "Your order has been successfully placed. Redirecting to dashboard...",
        icon: "success",
        confirmButtonColor: "#16a34a",
      });

      // Redirect to dashboard
      router.push("/dashboard");
    }
  };

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-12 flex items-center justify-center">
          <div className="text-center">
            <ShoppingCart size={64} className="mx-auto mb-4 text-gray-400" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-gray-600 mb-8">
              Start shopping to add items to your cart!
            </p>
            <Link
              href="/items"
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <Link
          href="/items"
          className="flex items-center gap-2 text-green-600 hover:text-green-700 mb-8"
        >
          <ArrowLeft size={20} />
          Continue Shopping
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-6">
                Shopping Cart ({cartItems.length})
              </h1>

              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition"
                  >
                    {/* Product Image */}
                    <div className="w-24 h-24 bg-gradient-to-b from-green-100 to-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="max-w-full max-h-full object-contain p-2"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <Link
                        href={`/items/${item.id}`}
                        className="text-lg font-semibold text-gray-900 hover:text-green-600 transition"
                      >
                        {item.name}
                      </Link>
                      <p className="text-gray-600 text-sm mb-3">
                        {item.category}
                      </p>
                      <p className="text-green-600 font-bold text-lg">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex flex-col items-end gap-3">
                      <div className="flex items-center gap-2 border border-gray-300 rounded-lg">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="px-3 py-1 hover:bg-gray-100 transition"
                        >
                          -
                        </button>
                        <span className="w-8 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-3 py-1 hover:bg-gray-100 transition"
                        >
                          +
                        </button>
                      </div>
                      <p className="font-bold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>$5.00</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${(total * 0.1).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-green-600">
                  ${(total + 5 + total * 0.1).toFixed(2)}
                </span>
              </div>

              <button
                onClick={handleProceedToCheckout}
                className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition mb-3"
              >
                Proceed to Checkout
              </button>

              <button
                onClick={() => setShowConfirm(true)}
                className="w-full py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>

        {/* Clear Cart Confirmation */}
        {showConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-sm mx-auto">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Clear Cart?
              </h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to remove all items from your cart?
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="flex-1 py-2 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    clearCart();
                    setShowConfirm(false);
                  }}
                  className="flex-1 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
