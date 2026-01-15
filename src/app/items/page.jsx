import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ItemsList from "@/components/items/ItemsList";

export default function ItemsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Shop Fresh Groceries
          </h1>
          <p className="text-gray-600">
            Explore our wide selection of fresh, organic products
          </p>
        </div>

        {/* Items List  */}
        <ItemsList />
      </div>

      <Footer />
    </main>
  );
}
