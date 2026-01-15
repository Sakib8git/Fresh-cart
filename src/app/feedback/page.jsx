import Navbar from "@/components/navbar";
import FeedbackForm from "@/components/forms/FeedbackForm";
import Footer from "@/components/footer";

export default function FeedbackPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar></Navbar>
      <FeedbackForm></FeedbackForm>
      <Footer></Footer>
    </main>
  );
}
