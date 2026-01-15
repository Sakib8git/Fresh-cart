import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ItemDetail from "@/components/items/ItemDetail";

export default function ItemDetailPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Item detail client component */}
      <ItemDetail />

      <Footer />
    </main>
  );
}
