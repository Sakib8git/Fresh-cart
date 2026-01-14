"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { signInWithEmail, signInWithGoogle } from "@/lib/auth";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signInWithEmail(email, password);
      toast.success(`Login successful! Welcome back, ${email}`);
      router.push("/");
    } catch (err) {
      console.error(err);
      toast.error("Login failed");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleGoogleLogin() {
    try {
      await signInWithGoogle();
      toast.success("Logged in with Google!");
      router.push("/");
    } catch (err) {
      toast.error("Google login failed");
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <div className="text-center mb-8">
        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-white font-bold text-xl">F</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
        <p className="text-gray-600 mt-2">Sign in to your FreshCart account</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
        {/* Email */}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 transition"
          />
        </div>

        {/* Password */}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

        {/* Remember Me & Forgot Password */}
        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-gray-300"
            />
            <span className="text-gray-600">Remember me</span>
          </label>
          <Link
            href="/forgot-password"
            className="text-green-600 hover:text-green-700"
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition disabled:opacity-50"
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </button>
      </form>

      {/* Divider */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      {/* Social Login */}
      <div>
        <button
          onClick={handleGoogleLogin}
          className="py-2 px-4 w-full border border-gray-300 rounded-lg hover:bg-gray-50 transition font-medium text-gray-700"
        >
          Google
        </button>
      </div>

      {/* Sign Up Link */}
      <p className="text-center text-gray-600 text-sm mt-6">
        Don't have an account?{" "}
        <Link
          href="/signup"
          className="text-green-600 font-semibold hover:text-green-700"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
