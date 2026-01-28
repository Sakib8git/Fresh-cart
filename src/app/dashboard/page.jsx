"use client";

import { useEffect, useState } from "react";
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
import { useOrders } from "@/components/context/OrderContext";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editedUser, setEditedUser] = useState(null);
  const [user, setUser] = useState(null);
  const { user: authUser, loading } = useAuthState();
  const { getRecentOrders } = useOrders();
  // console.log(getRecentOrders().length);

  // Load user data from localStorage or create default
  useEffect(() => {
    const savedUser = localStorage.getItem("userProfile");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      const defaultUser = {
        name: authUser?.displayName || "Guest User",
        email: authUser?.email || "john@example.com",
        phone: authUser?.phoneNumber || "+1 (555) 123-4567",
        address: "123 Green Street, Fresh City, FC 12345",
        memberSince: "January 2024",
        totalOrders: 24,
        totalSpent: "$1,245.50",
      };
      setUser(defaultUser);
      localStorage.setItem("userProfile", JSON.stringify(defaultUser));
    }
  }, [authUser]);

  // Initialize edited user data when entering edit mode
  const handleEditClick = () => {
    setEditedUser({ ...user });
    setIsEditingProfile(true);
  };
  // Handle input changes in edit mode
  const handleInputChange = (field, value) => {
    setEditedUser((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  // Save profile changes
  const handleSaveProfile = () => {
    const updatedUser = {
      ...user,
      name: editedUser.name,
      phone: editedUser.phone,
      address: editedUser.address,
      // email is NOT updated - keeping it as is
    };
    setUser(updatedUser);
    localStorage.setItem("userProfile", JSON.stringify(updatedUser));
    setIsEditingProfile(false);
    console.log("[v0] Profile saved:", updatedUser);
  };

  // Cancel edit mode
  const handleCancelEdit = () => {
    setEditedUser(null);
    setIsEditingProfile(false);
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
              value: getRecentOrders().length,
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
          {["orders", "profile"].map((tab) => (
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

        {activeTab === "overview" && (
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Recent Orders
            </h2>
            <div className="space-y-4">
              {getRecentOrders().length === 0 ? (
                <p className="text-gray-600 text-center py-8">
                  No orders yet. Start shopping to create your first order!
                </p>
              ) : (
                getRecentOrders().map((order, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <div>
                      <p className="font-semibold text-gray-900">{order.id}</p>
                      <p className="text-sm text-gray-600">{order.date}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {order.items}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">
                        {order.total}
                      </p>
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded ${order.statusColor}`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {activeTab === "profile" && (
          <div className="">
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
                    value={
                      isEditingProfile ? editedUser?.name || "" : user.name
                    }
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 ${
                      isEditingProfile
                        ? "bg-white cursor-text"
                        : "bg-gray-50 cursor-default"
                    }`}
                    readOnly={!isEditingProfile}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={
                      isEditingProfile ? editedUser?.email || "" : user.email
                    }
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 ${
                      isEditingProfile
                        ? "bg-white cursor-text"
                        : "bg-gray-50 cursor-default"
                    }`}
                    readOnly={!isEditingProfile}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={
                      isEditingProfile ? editedUser?.phone || "" : user.phone
                    }
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 ${
                      isEditingProfile
                        ? "bg-white cursor-text"
                        : "bg-gray-50 cursor-default"
                    }`}
                    readOnly={!isEditingProfile}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    value={
                      isEditingProfile
                        ? editedUser?.address || ""
                        : user.address
                    }
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 ${
                      isEditingProfile
                        ? "bg-white cursor-text"
                        : "bg-gray-50 cursor-default"
                    }`}
                    readOnly={!isEditingProfile}
                  />
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                {!isEditingProfile ? (
                  <button
                    onClick={handleEditClick}
                    className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition"
                  >
                    Edit Profile
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handleSaveProfile}
                      className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-900 rounded-lg font-medium transition"
                    >
                      Cancel
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
