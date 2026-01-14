"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
// import { signOut } from "firebase/auth";
import { signInWithGoogle, signUpWithEmail } from "@/lib/auth";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function SignupForm() {
  const router = useRouter();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  async function handleSignup(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    if (!formData.agreeToTerms) {
      toast.error("Please agree to the terms and conditions");
      return;
    }
    setIsLoading(true);
    try {
      await signUpWithEmail(
        formData.email,
        formData.password,
        formData.fullName
      );
      toast.success(
        `Account created successfully! Welcome, ${formData.fullName}`
      );
      await signOut(auth); // logout immediately
      router.push("/login"); // send to login page
    } catch (err) {
      console.error(err);
      toast.error("Signup failed");
    } finally {
      setIsLoading(false);
    }
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (formData.password !== formData.confirmPassword) {
  //     toast("Passwords do not match!");
  //     return;
  //   }
  //   if (!formData.agreeToTerms) {
  //     toast("Please agree to the terms and conditions");
  //     return;
  //   }
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     toast(
  //       `Account created successfully! Welcome to FreshCart, ${formData.fullName}`
  //     );
  //     setIsLoading(false);
  //     setFormData({
  //       fullName: "",
  //       email: "",
  //       password: "",
  //       confirmPassword: "",
  //       agreeToTerms: false,
  //     });
  //   }, 1500);
  // };

  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900">
                Create Account
              </h1>
              <p className="text-gray-600 mt-2">
                Join FreshCart and start shopping fresh groceries
              </p>
            </div>

            <form onSubmit={handleSignup} className="space-y-4">
              {/* Full Name Input */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 transition"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 transition"
                />
              </div>

              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-500"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password Input */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    placeholder="••••••••"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3 text-gray-500"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms Checkbox */}
              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <span className="text-sm text-gray-600">
                    I agree to the{" "}
                    <Link
                      href="/contact"
                      className="text-green-600 hover:text-green-700"
                    >
                      Terms & Conditions
                    </Link>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50 mt-6"
              >
                {isLoading ? "Creating Account..." : "Sign Up"}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social Signup */}
            <div className="">
              <button
                onClick={async () => {
                  try {
                    await signInWithGoogle();
                    toast.success("Logged in with Google!");
                    router.push("/");
                  } catch (err) {
                    toast.error("Google login failed");
                  }
                }}
                className="py-2 px-4 w-full border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium text-gray-700"
              >
                Google
              </button>
              {/* <button className="py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium text-gray-700">
                            GitHub
                          </button> */}
            </div>

            {/* Login Link */}
            <p className="text-center text-gray-600 text-sm mt-6">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-green-600 font-semibold hover:text-green-700"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
      
    </main>
  );
}
