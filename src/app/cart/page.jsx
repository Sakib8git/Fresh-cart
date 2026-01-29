"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { Trash2, ArrowLeft, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Swal from "sweetalert2";
import { motion, AnimatePresence } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-12 flex items-center justify-center">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <ShoppingCart size={64} className="mx-auto mb-4 text-gray-400" />
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Your Cart is Empty
            </motion.h1>
            <motion.p variants={itemVariants} className="text-gray-600 mb-8">
              Start shopping to add items to your cart!
            </motion.p>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/items"
                className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Continue Shopping
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/items"
            className="flex items-center gap-2 text-green-600 hover:text-green-700"
          >
            <ArrowLeft size={20} />
            Continue Shopping
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <motion.div
              className="bg-white rounded-lg shadow-sm p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                Shopping Cart ({cartItems.length})
              </motion.h1>

              <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      layout
                      whileHover={{ boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
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
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Order Summary */}
          <motion.div
            className="bg-white rounded-lg shadow-sm p-6 sticky top-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl font-bold text-gray-900 mb-6"
            >
              Order Summary
            </motion.h2>

            <motion.div
              className="space-y-3 mb-6 pb-6 border-b border-gray-200"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div
                variants={itemVariants}
                className="flex justify-between text-gray-600"
              >
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex justify-between text-gray-600"
              >
                <span>Shipping</span>
                <span>$5.00</span>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex justify-between text-gray-600"
              >
                <span>Tax</span>
                <span>${(total * 0.1).toFixed(2)}</span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-between items-center mb-6"
            >
              <span className="text-lg font-bold text-gray-900">Total</span>
              <span className="text-2xl font-bold text-green-600">
                ${(total + 5 + total * 0.1).toFixed(2)}
              </span>
            </motion.div>

            <motion.button
              onClick={handleProceedToCheckout}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition mb-3"
            >
              Proceed to Checkout
            </motion.button>

            <motion.button
              onClick={() => setShowConfirm(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition"
            >
              Clear Cart
            </motion.button>
          </motion.div>
        </div>

        {/* Clear Cart Confirmation */}
        <AnimatePresence>
          {showConfirm && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-lg p-6 max-w-sm mx-auto"
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 15 }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Clear Cart?
                </h3>
                <p className="text-gray-600 mb-6">
                  Are you sure you want to remove all items from your cart?
                </p>
                <div className="flex gap-3">
                  <motion.button
                    onClick={() => setShowConfirm(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-2 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 transition"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    onClick={() => {
                      clearCart();
                      setShowConfirm(false);
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                  >
                    Clear
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </main>
  );
}
