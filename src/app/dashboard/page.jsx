"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  Heart,
  MapPin,
  Settings,
  LogOut,
  TrendingUp,
  Package,
  Users,
  Home,
} from "lucide-react";
import useAuthState from "@/hooks/useAuthState";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("orders");
  const { user: authUser, loading } = useAuthState();

  // Fallback user data if not logged in
  const user = {
    name: authUser?.displayName || "Guest User",
    email: authUser?.email || "john@example.com",
    phone: authUser?.phoneNumber || "+1 (555) 123-456",
    address: "123 Green Street, Fresh City, FC 12345",
    memberSince: "January 2024",
    totalOrders: 24,
    totalSpent: "$1,245.50",
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome back, {user.name.split(" ")[0]}!
              </h1>
              <p className="text-gray-600 mt-2">
                Member since {user.memberSince}
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition"
              >
                <Home size={20} />
                Home
              </Link>
              <button className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition">
                <LogOut size={20} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          {[
            {
              label: "Total Orders",
              value: "24",
              icon: ShoppingBag,
              color: "bg-green-100",
              textColor: "text-green-600",
            },
            {
              label: "Saved Items",
              value: "12",
              icon: Heart,
              color: "bg-red-100",
              textColor: "text-red-600",
            },
            
            
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-gray-200"
              >
                <div
                  className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                >
                  <Icon className={`${stat.textColor}`} size={24} />
                </div>
                <p className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-2">
                  {stat.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-gray-200 overflow-x-auto">
          {[ "orders", "profile"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 font-medium transition border-b-2 ${
                activeTab === tab
                  ? "border-green-600 text-green-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        

        {activeTab === "orders" && (
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Order History
            </h2>
            <div className="space-y-4">
              {[
                {
                  id: "#ORD-001",
                  date: "Jan 10, 2024",
                  items: "Fresh Vegetables, Organic Fruits",
                  total: "$45.99",
                  status: "Delivered",
                  statusColor: "bg-green-100 text-green-800",
                },
                {
                  id: "#ORD-002",
                  date: "Jan 8, 2024",
                  items: "Dairy Products",
                  total: "$32.50",
                  status: "Delivered",
                  statusColor: "bg-green-100 text-green-800",
                },
                {
                  id: "#ORD-003",
                  date: "Jan 5, 2024",
                  items: "Fresh Meat, Vegetables",
                  total: "$67.25",
                  status: "In Transit",
                  statusColor: "bg-blue-100 text-blue-800",
                },
              ].map((order, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <div>
                    <p className="font-semibold text-gray-900">{order.id}</p>
                    <p className="text-sm text-gray-600">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{order.total}</p>
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded ${order.statusColor}`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "profile" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Info */}
            <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Personal Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={user.name}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={user.email}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={user.phone}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    value={user.address}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900"
                    readOnly
                  />
                </div>
              </div>
              <button className="mt-6 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition">
                Edit Profile
              </button>
            </div>

            {/* Settings */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Settings size={20} />
                Settings
              </h2>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 text-green-600"
                  />
                  <span className="text-gray-700">Email Notifications</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 text-green-600"
                  />
                  <span className="text-gray-700">SMS Alerts</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-green-600" />
                  <span className="text-gray-700">Marketing Emails</span>
                </label>
              </div>
              <button className="mt-6 w-full px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 font-medium transition">
                Change Password
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
