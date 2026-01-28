"use client";

import { createContext, useContext, useState, useEffect } from "react";

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);

  // Load orders from localStorage on mount
  useEffect(() => {
    const savedOrders = localStorage.getItem("orders");
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  // Save orders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const addOrder = (cartItems, totalPrice) => {
    const newOrder = {
      id: `#ORD-${String(orders.length + 1).padStart(3, "0")}`,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }),
      items: cartItems.map((item) => item.name).join(", "),
      total: `$${totalPrice.toFixed(2)}`,
      status: "Delivered",
      statusColor: "bg-green-100 text-green-800",
      cartItems: cartItems,
      timestamp: new Date().toISOString(),
    };

    setOrders((prevOrders) => [newOrder, ...prevOrders]);
    console.log("[v0] Order created:", newOrder);
    return newOrder;
  };

  const getRecentOrders = () => {
    return orders;
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, getRecentOrders }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrders must be used within OrderProvider");
  }
  return context;
}
