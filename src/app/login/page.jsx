import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ToastContainer } from "react-toastify";
import LoginForm from "@/components/forms/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          <LoginForm />

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-green-700">
                Demo Credentials:
              </span>
              <br />
              Email: demo@user.com
              <br />
              Password: Anik1122
            </p>
          </div>
        </div>
      </div>

      <ToastContainer />
      <Footer />
    </main>
  );
}
