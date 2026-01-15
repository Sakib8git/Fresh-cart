import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import SignupForm from "@/components/forms/SignupForm";
import { ToastContainer } from "react-toastify";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <SignupForm></SignupForm>
      <ToastContainer />
      <Footer />
    </main>
  );
}
